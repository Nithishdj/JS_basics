 const QUOTES = [
      { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
      { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
      { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
      { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
      { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
      { text: "Well begun is half done.", author: "Aristotle" },
      { text: "If you’re going through hell, keep going.", author: "Winston Churchill" },
      { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
      { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
      { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
      { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
      { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
      { text: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.", author: "Mark Zuckerberg" },
      { text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
      { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
      { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
      { text: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
      { text: "What we fear doing most is usually what we most need to do.", author: "Tim Ferriss" },
      { text: "Little by little, one travels far.", author: "J.R.R. Tolkien" },
      { text: "Discipline equals freedom.", author: "Jocko Willink" }
    ];

    const quoteEl = document.getElementById('quote');
    const authorEl = document.getElementById('author');
    const newBtn = document.getElementById('newBtn');
    const copyBtn = document.getElementById('copyBtn');

    let lastIndex = -1;

    function randomIndex() {
      if (QUOTES.length <= 1) return 0;
      let i;
      do { i = Math.floor(Math.random() * QUOTES.length); } while (i === lastIndex);
      lastIndex = i;
      return i;
    }

    function showRandomQuote() {
      if (!QUOTES.length) {
        quoteEl.textContent = "No quotes available.";
        authorEl.textContent = "";
        return;
      }
      const q = QUOTES[randomIndex()];
      // quick fade reflow
      quoteEl.classList.remove('fade');
      void quoteEl.offsetWidth; // force reflow to restart animation
      quoteEl.textContent = q.text;
      quoteEl.classList.add('fade');
      authorEl.textContent = q.author ? `— ${q.author}` : "";
    }

    function copyQuote() {
      const text = authorEl.textContent ? `${quoteEl.textContent} ${authorEl.textContent}` : quoteEl.textContent;
      navigator.clipboard?.writeText(text).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => copyBtn.textContent = "Copy", 900);
      }).catch(() => {
        // Fallback: select text
        alert("Copy failed. Please copy manually.");
      });
    }

    // Events
    newBtn.addEventListener('click', showRandomQuote);
    copyBtn.addEventListener('click', copyQuote);
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && !e.repeat) {
        e.preventDefault();
        showRandomQuote();
      }
    });

    // First quote
    showRandomQuote();