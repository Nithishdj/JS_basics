 const marquee = document.getElementById("marquee");
    let pos = 400; // starting position (same as container width)

    function moveText() {
      pos--;
      if (pos < -marquee.offsetWidth) {
        pos = 400; // reset when text goes fully left
      }
      marquee.style.left = pos + "px";
      requestAnimationFrame(moveText);
    }

    // Start moving
    moveText();