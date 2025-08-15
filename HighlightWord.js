const paragraph = document.getElementById("myPara");
        const wordInput = document.getElementById("wordInput");
        const highlightBtn = document.getElementById("highlightBtn");

        highlightBtn.addEventListener("click", () => {
            const word = wordInput.value.trim();
            if (word === "") return;

            const regex = new RegExp(`(${word})`, "gi");
            const newText = paragraph.textContent.replace(regex, "<mark>$1</mark>");
            paragraph.innerHTML = newText;
        });