import TodoCreate from './script.js'
import ThemeToggler from './themeToggle.js'


const MakeTodo = new TodoCreate(".task_input",".submit",".items","items1");

 const DarkTheme = new ThemeToggler(".theme_button","dark",".lightIcon",".darkIcon"); // in Here if we can add any theme name like which are made in css file by var()
 DarkTheme.fireTheme();