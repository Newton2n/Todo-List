//Normal js
// const theme_button = document.getElementById("theme_button");
// const dark_icon = document.getElementById("dark");
// const light_icon = document.getElementById("light");

// theme_button.addEventListener("click", function () {
//   document.body.classList.toggle("dark");
//   // dark_icon.classList.toggle("hidden");
//   // light_icon.classList.toggle("hidden");
// });

// OOP used js

//Now we can change any theme by class naming

 export default class ThemeToggler {
  constructor(buttonSelector,ThemeName,icon1,icon2) {
   this.theme_button =document.querySelector(buttonSelector);
   this.ThemeName =ThemeName;
   this.icon1= document.querySelector(icon1);
   this.icon2 =document.querySelector(icon2);
  };

  toggleTheme(){
    document.body.classList.toggle(this.ThemeName);
    this.icon1.classList.toggle("hidden");
    this.icon2.classList.toggle("hidden");
    
  }
   fireTheme(){
    this.theme_button.addEventListener("click",()=>{
      this.toggleTheme()
    })
   }
}
