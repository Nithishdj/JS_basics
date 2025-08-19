const list = document.getElementById("itemList");

    // Event delegation: listen for clicks on the <ul>
    list.addEventListener("click", function(e) {
      if (e.target.tagName === "LI") {
        e.target.remove(); // remove clicked item
      }
    });