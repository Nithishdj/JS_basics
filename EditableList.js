const list = document.getElementById("itemList");

    list.addEventListener("dblclick", function(e) {
      if (e.target.tagName === "LI") {
        let currentText = e.target.textContent;

        // Create input box
        let input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.className = "edit";

        // Replace li with input
        e.target.textContent = "";
        e.target.appendChild(input);
        input.focus();

        // Save on Enter key
        input.addEventListener("keypress", function(event) {
          if (event.key === "Enter") {
            e.target.textContent = input.value;
          }
        });

        // Save on blur (click outside)
        input.addEventListener("blur", function() {
          e.target.textContent = input.value;
        });
      }
    });