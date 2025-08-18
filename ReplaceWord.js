const para = document.getElementById("text");
    const findWord = document.getElementById("findWord");
    const replaceWord = document.getElementById("replaceWord");
    const btn = document.getElementById("replaceBtn");

    btn.addEventListener("click", () => {
      let searchValue = findWord.value;
      let replaceValue = replaceWord.value;

      if (searchValue.trim() === "") {
        alert("Please enter a word to replace.");
        return;
      }

      // Create regex for global & case-insensitive match
      let regex = new RegExp(searchValue, "gi");

      para.innerHTML = para.innerHTML.replace(regex, replaceValue);
    });