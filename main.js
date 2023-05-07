// import necceseary js
import { addSymptomSelect, deleteSymptomSelect, submitSymptoms } from "./js/htmlLogic";
import initIntroJs from "./js/initIntroJs";

// add one select to form just run once
addSymptomSelect()

// add event listener to button add, delete, and submit
document.getElementById('add_symptom')
  .addEventListener('click', addSymptomSelect)
document.getElementById(`deleteSymptomSelect`)
  .addEventListener('click', deleteSymptomSelect)
document.getElementById('show_chart')
  .addEventListener('click', submitSymptoms)

  initIntroJs()