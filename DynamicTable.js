 function addRow() {
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const city = document.getElementById("city").value;

      if (name === "" || age === "" || city === "") {
        alert("⚠️ Please fill all fields!");
        return;
      }

      const table = document.getElementById("studentTable");
      const row = document.createElement("tr");

      // Create cells
      const cell1 = document.createElement("td");
      cell1.textContent = name;

      const cell2 = document.createElement("td");
      cell2.textContent = age;

      const cell3 = document.createElement("td");
      cell3.textContent = city;

      // Append cells to row
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);

      // Append row to table
      table.appendChild(row);

      // Clear inputs
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("city").value = "";
    }