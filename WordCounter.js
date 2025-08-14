const textArea = document.getElementById("textArea");
        const wordCount = document.getElementById("wordCount");

        textArea.addEventListener("input", function () {
            const words = textArea.value.trim().split(/\s+/).filter(w => w !== "").length;
            wordCount.textContent = words;
        });