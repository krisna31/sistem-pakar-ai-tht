import { symptoms } from "./js/sistem_pakar";

let INDEX = 0
function deleteSymptomSelect(index) {
  if (INDEX <= 1) {
    alert('minimal 1 gejala')
    return
  }
  
  document.getElementById(`elSelectParent${index}`).remove()
  INDEX--
}

function addSymptomSelect(index) {
  if (index > 36) {
    alert('Gejala sudah maksimum')
    return
  }
  if (INDEX === 0)
    document.getElementById('formGejala').innerHTML += `
        <div class="row d-flex justify-content-center align-items-center" id="elSelectParent${index}">
        <div class="col-8 col-md-8 col-lg-6 mb-3">
          <select title="elSelect" id="elSelect${index}" class="form-control">
            <option value="">Please select</option>
          </select>
        </div>
        <div class="col-2 mb-3">
          <button class="btn btn-secondary disabled" id="deleteSymptomSelect${index}">
            <i class="bi bi-x"></i>
          </button>
        </div>
      </div>
    `
  else
    document.getElementById('formGejala').innerHTML += `
      <div class="row d-flex justify-content-center align-items-center" id="elSelectParent${index}">
        <div class="col-8 col-md-8 col-lg-6 mb-3">
          <select title="elSelect" id="elSelect${index}" class="form-control">
            <option value="">Please select</option>
          </select>
        </div>
        <div class="col-2 mb-3">
          <button class="btn btn-danger" id="deleteSymptomSelect${index}">
            <i class="bi bi-x"></i>
          </button>
        </div>
      </div>
    `

  const selectElement = document.querySelector(`#elSelect${index}`)
  for (const [_, symptom] of Object.entries(symptoms)) {
    selectElement.add(new Option(symptom));
  }
  
  for (let idx = 1; idx <= INDEX; idx++) {
    document.getElementById(`deleteSymptomSelect${idx}`)
    .addEventListener('click', _ => deleteSymptomSelect(idx), true)
  }

  INDEX++
}

document.getElementById('add_symptom').addEventListener('click', _ => addSymptomSelect(INDEX))

addSymptomSelect(INDEX)
// showChart(diseases)
// showChart(checkDiseases([1, 3, 7, 13, 14]))
