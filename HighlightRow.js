const rows = document.querySelectorAll("#myTable tr");

    rows.forEach((row, index) => {
      if (index === 0) return; // skip header row

      row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "#ffe066"; // highlight color
      });

      row.addEventListener("mouseout", function() {
        row.style.backgroundColor = ""; // reset
      });
    });