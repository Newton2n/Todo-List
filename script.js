let input = document.getElementById("task_input");
let submit = document.getElementById("submit");
let All_items = document.querySelector("#items");

// Submit new task
submit.addEventListener("click", () => {
  if (input.value.trim() === "") {
    console.log("nothing");
  } else {
    let wrapper = document.createElement("div");
    wrapper.className = "item-wrapper";

    let p = document.createElement("p");
    p.className = "text_show";

    let trashIcon = document.createElement("i");
    trashIcon.className = "delete fa-solid fa-trash";

    let circleIcon = document.createElement("i");
    circleIcon.className = "circle fa-regular fa-circle";

    p.insertAdjacentText("beforeend", input.value);
    p.prepend(circleIcon);
    p.prepend(trashIcon);

    wrapper.append(p);
    All_items.append(wrapper);

    input.value = "";
    saveData();
  }
});

// Toggle check or delete task
document.querySelector("#items").addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    e.target.classList.toggle("fa-regular");
    e.target.classList.toggle("fa-solid");
    e.target.classList.toggle("fa-circle");
    e.target.classList.toggle("fa-circle-check");
    saveData();
  } else if (e.target.classList.contains("delete")) {
    const wrapper = e.target.closest(".item-wrapper");
    console.log(wrapper)
    if (wrapper) wrapper.remove();
    saveData();
  }
});

// Save to localStorage
function saveData() {
  localStorage.setItem("items", All_items.innerHTML);
}

// Load from localStorage
function showData() {
  All_items.innerHTML = localStorage.getItem("items") || "";
}
showData();
