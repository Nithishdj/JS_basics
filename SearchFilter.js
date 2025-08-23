 // Utility: normalize strings (case- & accent-insensitive)
    const normalize = (s) => s
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{M}+/gu, ''); // strip diacritics

    // Cache elements
    const input = document.getElementById('q');
    const list = document.getElementById('items');
    const rows = Array.from(list.querySelectorAll('li'));
    const count = document.getElementById('count');

    // Keep original text to safely re-highlight on each input
    rows.forEach(li => li.dataset.orig = li.innerHTML);

    function highlight(text, query) {
      if (!query) return text;
      // Escape regex special chars in query
      const safe = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(`(${safe})`, 'ig');
      return text.replace(re, '<mark>$1</mark>');
    }

    function applyFilter() {
      const terms = normalize(input.value.trim()).split(/\s+/).filter(Boolean);
      let visible = 0;

      rows.forEach(li => {
        const haystack = normalize((li.textContent + ' ' + (li.dataset.tags || '')).trim());
        const match = terms.every(t => haystack.includes(t));
        if (match) {
          li.style.display = '';
          // Progressive highlight: highlight each term in the original HTML text only (not in tags)
          let html = li.dataset.orig;
          terms.forEach(t => { html = highlight(html, t); });
          li.innerHTML = html;
          visible++;
        } else {
          li.style.display = 'none';
          // Restore to original when hidden (prevents mark bleed when shown later)
          li.innerHTML = li.dataset.orig;
        }
      });

      count.textContent = `${rows.length} items • ${visible} visible`;
    }

    // Input listener (with tiny microtask debounce via requestAnimationFrame)
    let raf = null;
    input.addEventListener('input', () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(applyFilter);
    });

    // Keyboard nicety: Esc clears the field
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && input.value) {
        input.value = '';
        applyFilter();
      }
    });

    // Initial render
    applyFilter();