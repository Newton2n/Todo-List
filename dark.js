const theme_button = document.getElementById("theme_button");
const dark_icon = document.getElementById("dark");
const light_icon = document.getElementById("light");
// dark_icon.classList.add("hidden");
// light_icon.classList.remove("hidden");
// dark_icon.classList.add("hidden");
theme_button.addEventListener("click",function(){
  document.body.classList.toggle("dark");
  dark_icon.classList.toggle("hidden")
  light_icon.classList.toggle("hidden")
})