 const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
      input.addEventListener("focus", () => {
        input.classList.add("highlight");
      });

      input.addEventListener("blur", () => {
        input.classList.remove("highlight");
      });
    });