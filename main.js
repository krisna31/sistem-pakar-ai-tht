import { showChart } from "./js/chart_logic";
import { checkDiseases, symptoms } from "./js/sistem_pakar";

let INDEX = 0

addSymptomSelect(INDEX)

function deleteSymptomSelect() {
  console.log(INDEX);
  if (INDEX <= 1) {
    alert('minimal 1 gejala')
    return
  }
  
  document.getElementById(`elSelectParent${INDEX-1}`).remove()
  INDEX--
}

function addSymptomSelect() {
  if (INDEX > 38) {
    alert('Gejala sudah maksimum')
    return
  }

  const newParentDiv = document.createElement('div')
  newParentDiv.setAttribute('class', 'row d-flex justify-content-center align-items-center')
  newParentDiv.setAttribute('id', `elSelectParent${INDEX}`)

  const newInnerDiv = document.createElement('div')
  newInnerDiv.setAttribute('class', 'col-10 col-lg-6 mb-3')

  const newSelect = document.createElement('select')
  newSelect.title = 'elSelect'
  newSelect.setAttribute('class', 'form-control')
  newSelect.setAttribute('id', `elSelect${INDEX}`)

  // rakit lego
  newInnerDiv.appendChild(newSelect)
  newParentDiv.appendChild(newInnerDiv)

  document.getElementById('formGejala').appendChild(newParentDiv)


  const selectElement = document.querySelector(`#elSelect${INDEX}`)
  for (const [key, symptom] of Object.entries(symptoms)) {
    const option = new Option(symptom)
    option.value = key
    selectElement.add(option);
  }
  INDEX++
}

function submitSymptoms() {
  let arrSubmittedSymptoms = []
  for (let index = 0; index < INDEX; index++) {
    arrSubmittedSymptoms.push(Number(document.getElementById(`elSelect${index}`).value))
  }
  arrSubmittedSymptoms = [...new Set(arrSubmittedSymptoms)]
  showChart(checkDiseases(arrSubmittedSymptoms))
}

document.getElementById('add_symptom')
  .addEventListener('click', addSymptomSelect)
document.getElementById(`deleteSymptomSelect`)
  .addEventListener('click', deleteSymptomSelect)


document.getElementById('show_chart').addEventListener('click', _ => submitSymptoms())