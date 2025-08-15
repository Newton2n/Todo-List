// this are normal js and the new version are at bottom in this file created by oop by class
//beginner can understood how oop work


// let input = document.getElementById("task_input");
// let submit = document.getElementById("submit");
// let All_items = document.querySelector("#items");

// // Submit new task
// submit.addEventListener("click", () => {
//   if (!input.input) {
//     console.log("nothing");
//   } else {
//     let wrapper = document.createElement("div");
//     wrapper.className = "item-wrapper";

//     let p = document.createElement("p");
//     p.className = "text_show";

//     let trashIcon = document.createElement("i");
//     trashIcon.className = "delete fa-solid fa-trash";

//     let circleIcon = document.createElement("i");
//     circleIcon.className = "circle fa-regular fa-circle";

//     p.insertAdjacentText("beforeend", input.value);
//     p.prepend(circleIcon);
//     p.prepend(trashIcon);

//     wrapper.append(p);
//     All_items.append(wrapper);

//     input.value = "";
//     saveData();
//   }
// });

// // Toggle check or delete task
// document.querySelector("#items").addEventListener("click", (e) => {
//   if (e.target.classList.contains("circle")) {
//     e.target.classList.toggle("fa-regular");
//     e.target.classList.toggle("fa-solid");
//     e.target.classList.toggle("fa-circle");
//     e.target.classList.toggle("fa-circle-check");
//     saveData();
//   } else if (e.target.classList.contains("delete")) {
//     const wrapper = e.target.closest(".item-wrapper");
//     console.log(wrapper);
//     if (wrapper) wrapper.remove();
//     saveData();
//   }
// });

// // Save to localStorage
// function saveData() {
//   localStorage.setItem("items", All_items.innerHTML);
// }

// // Load from localStorage
// function showData() {
//   All_items.innerHTML = localStorage.getItem("items") || "";
// }
// showData();

 export default class createTodo {
  constructor(input_box, SubmitBtn, itemsContainer,localstorageName) {
    this.input_box = document.querySelector(input_box);
    this.SubmitBtn = document.querySelector(SubmitBtn);
    this.itemsContainer = document.querySelector(itemsContainer);
    this.localstorageName =localstorageName;
    this.SubmitBtn.addEventListener("click", () => this.submitItem());
    this.showData();
    this.itemsContainer.addEventListener("click", (e) => this.handleClick(e));
  }

  submitItem() {
    if (this.input_box.value.trim() === "") {
      alert("Please enter something");
      return;
    } else {
      let itemBox = document.createElement("div");
      itemBox.className = "item-wrapper";
      let p = document.createElement("p");
      p.className = "text_show";

      let trashIcon = document.createElement("i");
      trashIcon.className = "delete fa-solid fa-trash";

      let circleIcon = document.createElement("i");
      circleIcon.className = "circle fa-regular fa-circle";

      p.insertAdjacentText("beforeend", this.input_box.value);
      p.prepend(circleIcon);
      p.prepend(trashIcon);
      itemBox.append(p);
      this.itemsContainer.append(itemBox);

      this.input_box.value = "";
      this.saveData();
    }
  }
  handleClick(e) {
    if (e.target.classList.contains("circle")) {
      e.target.classList.toggle("fa-regular");
      e.target.classList.toggle("fa-solid");
      e.target.classList.toggle("fa-circle");
      e.target.classList.toggle("fa-circle-check");
      this.saveData();
    } else if (e.target.classList.contains("delete")) {
      const wrapper = e.target.closest(".item-wrapper");
      console.log(wrapper);
      if (wrapper) wrapper.remove();
      this.saveData();
    }
  }
  saveData() {
    localStorage.setItem(this.localstorageName, this.itemsContainer.innerHTML);
  }
  showData() {
    this.itemsContainer.innerHTML = localStorage.getItem(this.localstorageName) || "";
  }
}

