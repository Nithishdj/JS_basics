 const password = document.getElementById("password");
    const toggle = document.getElementById("toggle");

    toggle.addEventListener("click", function() {
      if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "🙈"; // change icon
      } else {
        password.type = "password";
        toggle.textContent = "👁️"; // revert icon
      }
    });