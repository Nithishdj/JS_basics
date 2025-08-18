const input = document.getElementById("itemInput");
    const addBtn = document.getElementById("addBtn");
    const list = document.getElementById("itemList");

    addBtn.addEventListener("click", () => {
      let value = input.value.trim();
      if (value === "") {
        alert("Please enter something!");
        return;
      }

      // create new li element
      let li = document.createElement("li");
      li.textContent = value;

      // create delete button
      let delBtn = document.createElement("button");
      delBtn.textContent = "❌";
      delBtn.className = "deleteBtn";
      delBtn.onclick = () => li.remove();

      // attach delete button to li
      li.appendChild(delBtn);

      // add to list
      list.appendChild(li);

      // clear input
      input.value = "";
    });

    // Press Enter to add item
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addBtn.click();
    });