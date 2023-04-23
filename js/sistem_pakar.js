
// Define the symptoms and their corresponding numbers
const symptoms = {
  1: "Demam",
  2: "Sakit kepala",
  3: "Nyeri bicara menelan",
  4: "Batuk",
  5: "Hidung tersumbat",
  6: "Nyeri telinga",
  7: "Nyeri tenggorokan",
  8: "Hidung meler",
  9: "Letih lesu",
  10: "Mual muntah",
  11: "Selaput lendir merah bengkak",
  12: "Benjolan di leher",
  13: "Nyeri leher",
  14: "Pembengkakan kelenjar getah bening",
  15: "Pendarahan hidung",
  16: "Suara serak",
  17: "Bola mata bergerak tanpa sadar",
  18: "Dahi sakit",
  19: "Leher bengkak",
  20: "Tuli",
  21: "Ada yang tumbuh di mulut",
  22: "Air liur menetes",
  23: "Berat badan turun",
  24: "Bunyi nafas abnormal",
  25: "Infeksi sinus",
  26: "Nyeri antara mata",
  27: "Nyeri pinggir hidung",
  28: "Nyeri pipi di bawah mata",
  29: "Nyeri wajah",
  30: "Perubahan kulit",
  31: "Perubahan suara",
  32: "Radang gendang telinga",
  33: "Sakit gigi",
  34: "Serangan vertigo",
  35: "Telinga berdenging",
  36: "Telinga terasa penuh",
  37: "Tenggorokan gatal",
  38: "Tubuh tak seimbang"
};

// Define the diseases and their corresponding symptoms
const diseases = {
  "CONTRACT ULCERS": [3, 16],
  "ABAES PARAFLARINGEAL": [3, 19],
  "ABAES PERITONAILER": [1, 2, 7, 14, 16, 22],
  "BAROTITIS MEDIA": [2, 6],
  "DEVIASI SEPTUM": [1, 5, 6, 15, 25, 29],
  "FARINGITIS": [1, 3, 7, 13, 14],
  "KANKER LARING": [3, 4, 7, 13, 16, 23, 24],
  "KANKER LEHER DAN KEPALA": [3, 12, 15, 21, 30, 31],
  "KANKER LEHER METASTATIK": [12],
  "KANKER NASOFARING": [5, 15],
  "KANKER TONSIL": [7, 12],
  "LARINGITIS": [1, 3, 14, 19, 37],
  "NEURONITIS VESTIBULARIS": [10, 17],
  "OSTEOSKLEROSIS": [20, 35],
  "OTITIS MEDIA AKUT": [1, 6, 10, 32],
  "MENIERE": [6, 10, 34, 36],
  "TONSILITIS": [1, 2, 3, 4, 7, 10],
  "TUMOR SYARAF PENDENGARAN": [2, 20, 38],
  "VERTIGO POSTULAR": [17],
  "SINUSITIS MAKSILARIS": [1, 2, 4, 5, 8, 9, 11, 28, 33],
  "SINUSITIS FRONTALIS": [1, 2, 4, 5, 8, 9, 11, 18],
  "SINUSITIS ETMOIDALIS": [1, 2, 4, 5, 8, 9, 11, 18, 26, 27],
  "SINUSITIS SFENOIDALIS": [1, 2, 4, 5, 6, 8, 9, 11, 12],
  "PERUT": [1, 2, 3, 4],
};

// Define a function to check diseases based on symptoms
function checkDiseases(symptoms) {
  let diseasesMatched = {};

  for (const [disease, diseaseSymptoms] of Object.entries(diseases)) {
    let matchLength = 0
    symptoms.map(symtom => {
      if (diseaseSymptoms.includes(symtom)) {
        matchLength++
      }
    })

    if(matchLength > 0) {
      const percentage = Math.round((matchLength / diseaseSymptoms.length) * 100)
      diseasesMatched = {
        ...diseasesMatched,
        [disease] : percentage
      }
    }
  }

  return diseasesMatched;
}

export {diseases, symptoms, checkDiseases}