 function mergeTableCells(tableId, colIndex) {
      const table = document.getElementById(tableId);
      const rows = table.tBodies[0].rows;
      let lastValue = null;
      let spanCount = 1;
      let startRow = null;

      for (let i = 0; i < rows.length; i++) {
        const cell = rows[i].cells[colIndex];
        const cellValue = cell.textContent.trim();

        if (cellValue === lastValue) {
          spanCount++;
          cell.style.display = 'none';
          startRow.cells[colIndex].rowSpan = spanCount;
        } else {
          lastValue = cellValue;
          spanCount = 1;
          startRow = rows[i];
        }
      }
    }

    // Merge by Department column (0 index)
    mergeTableCells('mergeTable', 0);