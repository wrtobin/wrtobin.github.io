---
title: Floating-Point Summation Demo
kicker: Lab demo
lede: A browser-based experiment around summation order, numerical error, and a small WebAssembly component.
permalink: /lab/floating-point-summation/
published: false
---

This demo uses a small WebAssembly module that exports a floating-point addition routine. The goal is to make numerical behavior visible in a compact browser-based setting rather than to benchmark raw performance.

<div class="callout">
  <p class="status-note">The page loads a `.wasm` file as an ordinary static asset, so the experiment remains easy to host and easy to inspect.</p>
</div>

<label class="label" for="summation-input">Input values</label>
<textarea id="summation-input">10000000000000000
1
-10000000000000000
1</textarea>

<div class="demo-actions">
  <button id="run-demo" type="button">Run demo</button>
  <button id="reset-demo" class="button-secondary" type="button">Load example</button>
</div>

<div class="two-column-grid">
  <section class="demo-panel">
    <h2>What it compares</h2>
    <ul>
      <li>naive left-to-right summation</li>
      <li>Kahan compensated summation</li>
      <li>pairwise reduction driven by a Wasm-exported add operation</li>
    </ul>
  </section>
  <section class="demo-panel">
    <h2>Results</h2>
    <pre id="summation-output" class="numeric-output">Click “Run demo” to evaluate the current input.</pre>
  </section>
</div>

## Notes

- This experiment is about summation behavior rather than benchmark speed.
- The same structure can support future Rust or C/C++ generated `.wasm` components.
- Loading is handled with `fetch()` and `WebAssembly.instantiate()`, which works well for static hosting.

<script type="module" src="{{ '/lab/floating-point-summation/demo.js' | relative_url }}"></script>
