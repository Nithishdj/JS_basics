  const countryStates = {
      india: ["Tamil Nadu", "Kerala", "Maharashtra", "Delhi"],
      usa: ["California", "Texas", "Florida", "New York"],
      australia: ["New South Wales", "Victoria", "Queensland"]
    };

    const countryDropdown = document.getElementById("country");
    const stateDropdown = document.getElementById("state");

    countryDropdown.addEventListener("change", function () {
      const selectedCountry = countryDropdown.value;

      // Clear old states
      stateDropdown.innerHTML = '<option value="">--Select State--</option>';

      if (selectedCountry && countryStates[selectedCountry]) {
        countryStates[selectedCountry].forEach(state => {
          const option = document.createElement("option");
          option.value = state.toLowerCase().replace(/\s+/g, "-");
          option.textContent = state;
          stateDropdown.appendChild(option);
        });
      }
    });