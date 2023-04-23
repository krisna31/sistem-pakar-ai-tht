import { symptoms } from "./js/sistem_pakar";

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
  if (INDEX > 36) {
    alert('Gejala sudah maksimum')
    return
  }

  document.getElementById('formGejala').innerHTML += `
      <div class="row d-flex justify-content-center align-items-center" id="elSelectParent${INDEX}">
      <div class="col-8 col-md-8 col-lg-6 mb-3">
        <select title="elSelect" id="elSelect${INDEX}" class="form-control">
          <option value="">Please select</option>
        </select>
      </div>
    </div>
  `

  const selectElement = document.querySelector(`#elSelect${INDEX}`)
  for (const [_, symptom] of Object.entries(symptoms)) {
    selectElement.add(new Option(symptom));
  }
  
  
  INDEX++
}

function submitSymptoms() {
  const formGejala = document.querySelector('#formGejala')
  console.log(formGejala);
}

document.getElementById('add_symptom')
  .addEventListener('click', addSymptomSelect)
document.getElementById(`deleteSymptomSelect`)
  .addEventListener('click', deleteSymptomSelect)


// showChart(diseases)
// showChart(checkDiseases([1, 3, 7, 13, 14]))

document.getElementById('show_chart').addEventListener('click', _ => submitSymptoms())