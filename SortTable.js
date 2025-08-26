    const table = document.getElementById('myTable');
    const headers = table.querySelectorAll('th');
    let sortIndex = -1;
    let ascending = true;

    headers.forEach((th, index) => {
      th.addEventListener('click', () => {
        const type = th.getAttribute('data-type');
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));

        // toggle sort direction if same column
        if (index === sortIndex) {
          ascending = !ascending;
        } else {
          ascending = true;
          sortIndex = index;
        }

        rows.sort((a, b) => {
          let aText = a.children[index].textContent.trim();
          let bText = b.children[index].textContent.trim();

          if (type === 'number') {
            aText = parseFloat(aText);
            bText = parseFloat(bText);
            return ascending ? aText - bText : bText - aText;
          } else {
            return ascending
              ? aText.localeCompare(bText)
              : bText.localeCompare(aText);
          }
        });

        // Clear and re-append
        tbody.innerHTML = '';
        rows.forEach(row => tbody.appendChild(row));

        // Reset arrows
        headers.forEach(h => h.querySelector('.arrow').textContent = '');
        th.querySelector('.arrow').textContent = ascending ? '▲' : '▼';
      });
    });