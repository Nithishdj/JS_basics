 const textArea = document.getElementById("textArea");
    const counter = document.getElementById("counter");
    const maxChars = 50;

    textArea.addEventListener("input", function() {
      let text = textArea.value;

      if (text.length > maxChars) {
        textArea.value = text.substring(0, maxChars); // block extra typing
      }

      let remaining = maxChars - textArea.value.length;
      counter.textContent = "Remaining: " + remaining;

      // Style when limit reached
      if (remaining === 0) {
        counter.classList.add("limit-reached");
      } else {
        counter.classList.remove("limit-reached");
      }
    });