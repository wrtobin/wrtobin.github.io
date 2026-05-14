const defaultInput = `10000000000000000
1
-10000000000000000
1`;

const inputNode = document.getElementById("summation-input");
const outputNode = document.getElementById("summation-output");
const runButton = document.getElementById("run-demo");
const resetButton = document.getElementById("reset-demo");

let wasmExportsPromise;

function parseValues(rawText) {
  return rawText
    .split(/[\s,]+/)
    .map((value) => value.trim())
    .filter(Boolean)
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value));
}

function naiveSum(values) {
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
}

function kahanSum(values) {
  let total = 0;
  let compensation = 0;

  for (const value of values) {
    const adjusted = value - compensation;
    const nextTotal = total + adjusted;
    compensation = (nextTotal - total) - adjusted;
    total = nextTotal;
  }

  return total;
}

function pairwiseReduce(values, add) {
  if (values.length === 0) {
    return 0;
  }

  let working = [...values];
  while (working.length > 1) {
    const next = [];
    for (let index = 0; index < working.length; index += 2) {
      if (index + 1 < working.length) {
        next.push(add(working[index], working[index + 1]));
      } else {
        next.push(working[index]);
      }
    }
    working = next;
  }
  return working[0];
}

async function loadWasmExports() {
  if (!wasmExportsPromise) {
    wasmExportsPromise = fetch("./pairwise-sum.wasm")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to fetch Wasm asset: ${response.status}`);
        }
        return response.arrayBuffer();
      })
      .then((bytes) => WebAssembly.instantiate(bytes, {}))
      .then(({ instance }) => instance.exports);
  }

  return wasmExportsPromise;
}

async function runDemo() {
  const values = parseValues(inputNode.value);
  if (values.length === 0) {
    outputNode.textContent = "Enter at least one finite numeric value.";
    return;
  }

  const naive = naiveSum(values);
  const kahan = kahanSum(values);

  let pairwise;
  let implementation = "Wasm pairwise reduction";

  try {
    const wasmExports = await loadWasmExports();
    pairwise = pairwiseReduce(values, wasmExports.pairwise_sum);
  } catch (error) {
    pairwise = pairwiseReduce(values, (left, right) => left + right);
    implementation = `JavaScript fallback (${error.message})`;
  }

  outputNode.textContent = [
    `Input count: ${values.length}`,
    `Naive left-to-right: ${naive}`,
    `Kahan compensated:  ${kahan}`,
    `${implementation}: ${pairwise}`,
  ].join("\n");
}

runButton.addEventListener("click", () => {
  void runDemo();
});

resetButton.addEventListener("click", () => {
  inputNode.value = defaultInput;
  outputNode.textContent = "Click “Run demo” to evaluate the current input.";
});
