(function() {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function getStoredTheme() {
    try {
      return localStorage.getItem("theme-preference");
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem("theme-preference", theme);
    } catch (error) {
      // Ignore storage failures and fall back to the current session state.
    }
  }

  function systemTheme() {
    return mediaQuery.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);

    if (!toggle) {
      return;
    }

    var nextTheme = theme === "dark" ? "light" : "dark";
    var nextLabel = nextTheme === "dark" ? "Dark Mode" : "Light Mode";

    toggle.textContent = nextLabel;
    toggle.setAttribute("aria-label", "Switch to " + nextTheme + " mode");
    toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  var initialTheme = getStoredTheme();
  if (initialTheme !== "light" && initialTheme !== "dark") {
    initialTheme = systemTheme();
  }

  applyTheme(initialTheme);

  if (toggle) {
    toggle.addEventListener("click", function() {
      var currentTheme = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var nextTheme = currentTheme === "dark" ? "light" : "dark";
      storeTheme(nextTheme);
      applyTheme(nextTheme);
    });
  }

  mediaQuery.addEventListener("change", function() {
    var storedTheme = getStoredTheme();
    if (storedTheme === "light" || storedTheme === "dark") {
      return;
    }
    applyTheme(systemTheme());
  });
})();
