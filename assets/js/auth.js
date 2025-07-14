const params = new URLSearchParams(window.location.search);
    if (!params.get("next")) {
            window.location.href = "/index.html";
    }

function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

function checkPassword() {
  const correctPassword = "moku2025";
  const input = document.getElementById("passwordInput").value;

  if (input === correctPassword) {
    // Set unlocked flag
    localStorage.setItem("unlocked", "true");

    // Redirect to target URL or fallback
    const redirectURL = getQueryParam("next") || "index.html";
    window.location.href = redirectURL;
  } else {
    document.getElementById("errorText").classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("passwordInput");

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // prevent default form submission if inside a form
      checkPassword(); // your function
    }
  });
});