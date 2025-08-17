const blinkEl = document.getElementById("blink");

    setInterval(() => {
      blinkEl.style.visibility = 
        blinkEl.style.visibility === "hidden" ? "visible" : "hidden";
    }, 1000);