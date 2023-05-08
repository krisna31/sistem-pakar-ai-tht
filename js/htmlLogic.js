import { showChart } from "./chart_logic";
import { checkDiseases, sortedSymptomsMap } from "./sistem_pakar";

// create global variable for uid
let INDEX = 0

function deleteSymptomSelect() {
  if (INDEX <= 1) {
    const warnModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {})
    warnModal.show()
    document.querySelector("#understood").addEventListener("click",()=>warnModal.hide())
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
  newSelect.setAttribute('class', 'form-control wide')
  newSelect.setAttribute('id', `elSelect${INDEX}`)

  // rakit lego
  newInnerDiv.appendChild(newSelect)
  newParentDiv.appendChild(newInnerDiv)

  document.getElementById('formGejala').appendChild(newParentDiv)

  const selectElement = document.querySelector(`#elSelect${INDEX}`)
  sortedSymptomsMap.forEach((symptom, key) => {
    const option = new Option(symptom)
    option.value = key
    selectElement.add(option);
  })


  const options = {searchable: true};
    NiceSelect.bind(document.getElementById(`elSelect${INDEX}`), options);

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

export { addSymptomSelect, deleteSymptomSelect, submitSymptoms }