const textArea = document.getElementById("textArea");
        const charCount = document.getElementById("charCount");
        const remainingChars = document.getElementById("remainingChars");
        const maxChars = 200;

        textArea.addEventListener("input", function () {
            let text = textArea.value;
            if (text.length > maxChars) {
                text = text.substring(0, maxChars);
                textArea.value = text; // stop typing beyond limit
            }

            const chars = text.length;
            charCount.textContent = chars;
            remainingChars.textContent = maxChars - chars;

            remainingChars.style.color = (maxChars - chars) === 0 ? "red" : "green";
        });