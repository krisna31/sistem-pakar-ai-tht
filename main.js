$(document).ready(function() {
  $('#elSelect').select2();
  
  const selectElement = document.querySelector('#elSelect')
  console.log(selectElement);
  for (const [key, symptom] of Object.entries(symptoms)) {
    selectElement.add(new Option(symptom));
  }
  
  // showChart(diseases)
  // showChart(checkDiseases([1, 3, 7, 13, 14]))
});

function addSymptom() {
  const formGejala = document.getElementById('formGejala')
  console.log(formGejala);
}
