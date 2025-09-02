 const form = document.getElementById("myForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passError = document.getElementById("passError");
    const result = document.getElementById("result");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // stop page reload

      let valid = true;
      emailError.textContent = "";
      passError.textContent = "";
      result.textContent = "";

      // Check email format
      if (!email.value.includes("@") || !email.value.includes(".")) {
        emailError.textContent = "Invalid email format!";
        valid = false;
      }

      // Check password length
      if (password.value.length < 6) {
        passError.textContent = "Password must be at least 6 characters!";
        valid = false;
      }

      if (valid) {
        result.textContent = "Form submitted successfully!";
        result.className = "success";
      } else {
        result.textContent = "Please fix the errors above.";
        result.className = "error";
      }
    });