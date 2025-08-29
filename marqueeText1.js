const text = document.getElementById("text");
    const container = document.getElementById("container");

    let pos = 0;
    let direction = 1; // 1 = down, -1 = up

    function moveText() {
      pos += direction * 2; // speed
      text.style.top = pos + "px";

      // Reverse direction when hitting top/bottom
      if (pos >= container.clientHeight - text.clientHeight || pos <= 0) {
        direction *= -1;
      }
    }
    
    setInterval(moveText, 30);