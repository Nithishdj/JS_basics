 // DOM elements
    const timeEl = document.getElementById('time');
    const dateEl = document.getElementById('date');
    const startStopBtn = document.getElementById('startStop');
    const formatToggle = document.getElementById('formatToggle');

    // State
    let use24Hour = true;   // true = 24-hour, false = 12-hour
    let timerId = null;

    // Helper: pad numbers
    function pad(n) { return n.toString().padStart(2, '0'); }

    // Render function: updates DOM
    function renderClock() {
      const now = new Date();

      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // Format according to mode
      let suffix = '';
      if (!use24Hour) {
        suffix = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12 || 12; // convert 0 -> 12
      }
      const timeStr = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}${suffix}`;
      timeEl.textContent = timeStr;

      // Date string: e.g. Monday, 11 Aug 2025
      const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      dateEl.textContent = now.toLocaleDateString(undefined, options);
    }

    // Start the interval
    function startClock() {
      if (timerId !== null) return; // already running
      renderClock(); // immediate render
      timerId = setInterval(renderClock, 1000);
      startStopBtn.textContent = 'Stop';
      startStopBtn.classList.add('primary');
    }

    // Stop the interval
    function stopClock() {
      if (timerId === null) return;
      clearInterval(timerId);
      timerId = null;
      startStopBtn.textContent = 'Start';
      startStopBtn.classList.remove('primary');
    }

    // Toggle start/stop
    startStopBtn.addEventListener('click', () => {
      if (timerId === null) startClock();
      else stopClock();
    });

    // Toggle 12/24-hour format
    formatToggle.addEventListener('click', () => {
      use24Hour = !use24Hour;
      formatToggle.textContent = use24Hour ? 'Use 12-hour' : 'Use 24-hour';
      renderClock(); // update immediately to reflect change
    });

    // Initialize
    startClock();

    // Accessibility: update ARIA live region when page gains focus so screen readers announce current time
    window.addEventListener('focus', renderClock);