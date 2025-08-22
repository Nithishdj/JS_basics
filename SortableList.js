 const list = document.getElementById("sortableList");
    let draggedItem = null;

    list.addEventListener("dragstart", function(e) {
      if (e.target.tagName === "LI") {
        draggedItem = e.target;
        setTimeout(() => e.target.style.display = "none", 0);
      }
    });

    list.addEventListener("dragend", function(e) {
      if (draggedItem) {
        draggedItem.style.display = "block";
        draggedItem = null;
      }
    });

    list.addEventListener("dragover", function(e) {
      e.preventDefault();
      let target = e.target;
      if (target && target.tagName === "LI" && target !== draggedItem) {
        target.classList.add("drag-over");
      }
    });

    list.addEventListener("dragleave", function(e) {
      if (e.target.tagName === "LI") {
        e.target.classList.remove("drag-over");
      }
    });

    list.addEventListener("drop", function(e) {
      e.preventDefault();
      let target = e.target;
      if (target && target.tagName === "LI" && target !== draggedItem) {
        target.classList.remove("drag-over");
        list.insertBefore(draggedItem, target.nextSibling);
      }
    });