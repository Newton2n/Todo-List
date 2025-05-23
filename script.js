let input = document.getElementById("task_input");
let submit = document.getElementById("submit");
let All_items = document.querySelector("#items");
let item = document.querySelector(".text_show");
let toggle = document.querySelector(".toggle");

//submit item
submit.addEventListener("click", () => {
  if (input.value == "") {
    console.log("nothing");
  } else {
    let p = document.createElement("p");
    p.classList = "text_show";
    let i = document.createElement("i");
    let i2 = document.createElement("i");
    i2.classList = "delete fa-solid fa-trash";
    i.classList = "circle fa-regular fa-circle";
    p.insertAdjacentText("afterbegin", input.value);
    p.prepend(i);
    p.prepend(i2);
    input.value = "";
    All_items.append(p);
  }
  saveData();
});

document.querySelector("#items").addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    e.target.classList.toggle("fa-regular");
    e.target.classList.toggle("fa-solid");
    e.target.classList.toggle("fa-circle");
    e.target.classList.toggle("fa-circle-check");
    saveData();
  } else if (e.target.classList.contains("delete")) {
    const taskP = e.target.closest("p");
    taskP.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("items", All_items.innerHTML);
}

//show in  dom
function showData() {
  All_items.innerHTML = localStorage.getItem("items");
}
showData();
