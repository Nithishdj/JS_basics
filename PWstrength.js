 const password = document.getElementById("password");
    const strengthText = document.getElementById("strength");

    password.addEventListener("input", function() {
      const val = password.value;
      let strength = 0;

      // Rules
      if (val.length >= 8) strength++;
      if (/[a-z]/.test(val)) strength++;
      if (/[A-Z]/.test(val)) strength++;
      if (/[0-9]/.test(val)) strength++;
      if (/[^A-Za-z0-9]/.test(val)) strength++;

      // Show strength
      if (strength <= 2) {
        strengthText.textContent = "Strength: Weak";
        strengthText.className = "weak";
      } else if (strength === 3 || strength === 4) {
        strengthText.textContent = "Strength: Medium";
        strengthText.className = "medium";
      } else {
        strengthText.textContent = "Strength: Strong";
        strengthText.className = "strong";
      }
    });