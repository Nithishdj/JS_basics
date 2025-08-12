 // Get references to DOM elements
        const nameInput = document.getElementById("nameInput");
        const output = document.getElementById("output");

        // Add event listener for real-time changes
        nameInput.addEventListener("input", function () {
            let value = nameInput.value.trim();

            if (value) {
                output.textContent = "You typed: " + value;
            } else {
                output.textContent = "You typed: ";
            }
        });