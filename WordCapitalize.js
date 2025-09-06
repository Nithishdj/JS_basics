 const textBox = document.getElementById("textBox");

    textBox.addEventListener("input", function() {
      let words = textBox.value.split(" ");

      // Capitalize first letter of each word
      for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
          words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
      }

      // Rejoin words
      textBox.value = words.join(" ");
    });