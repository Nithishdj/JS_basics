const rainbowEl = document.getElementById("rainbow");
    const textInput = document.getElementById("textInput");
    const applyBtn = document.getElementById("applyBtn");

    function buildRainbow(text) {
      rainbowEl.innerHTML = "";
      const chars = Array.from(text);
      const step = Math.floor(360 / chars.length);

      chars.forEach((ch, i) => {
        const span = document.createElement("span");
        span.textContent = ch;
        span.style.color = `hsl(${i * step}, 80%, 60%)`;
        rainbowEl.appendChild(span);
      });
    }

    applyBtn.addEventListener("click", () => {
      buildRainbow(textInput.value || "");
    });

    // Initial text
    buildRainbow(textInput.value);