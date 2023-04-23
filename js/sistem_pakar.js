
// Define the symptoms and their corresponding numbers
const symptoms = {
  1: "demam",
  2: "sakit_kepala",
  3: "nyeri_bicara_menelan",
  4: "batuk",
  5: "hidung_tersumbat",
  6: "nyeri_telinga",
  7: "nyeri_tenggorokan",
  8: "hidung_meler",
  9: "letih_lesu",
  10: "mual_muntah",
  11: "selaput_lendir_merah_bengkak",
  12: "benjolan_di_leher",
  13: "nyeri_leher",
  14: "pembengkakan_kelenjar_getah_bening",
  15: "pendarahan_hidung",
  16: "suara_serak",
  17: "bola_mata_bergerak_tanpa_sadar",
  18: "dahi_sakit",
  19: "leher_bengkak",
  20: "tuli",
  21: "ada_yang_tumbuh_di_mulut",
  22: "air_liur_menetes",
  23: "berat_badan_turun",
  24: "bunyi_nafas_abnormal",
  25: "infeksi_sinus",
  26: "nyeri_antara_mata",
  27: "nyeri_pinggir_hidung",
  28: "nyeri_pipi_di_bawah_mata",
  29: "nyeri_wajah",
  30: "perubahan_kulit",
  31: "perubahan_suara",
  32: "radang_gendang_telinga",
  33: "sakit_gigi",
  34: "serangan_vertigo",
  35: "telinga_berdenging",
  36: "telinga_terasa_penuh",
  37: "tenggorokan_gatal",
  38: "tubuh_tak_seimbang"
};

// Define the diseases and their corresponding symptoms
const diseases = {
  contract_ulcers: [3, 16],
  abaes_paraflaringeal: [3, 19],
  abaes_peritonailer: [1, 2, 7, 14, 16, 22],
  barotitis_media: [2, 6],
  deviasi_septum: [1, 5, 6, 15, 25, 29],
  faringitis: [1, 3, 7, 13, 14],
  kanker_laring: [3, 4, 7, 13, 16, 23, 24],
  kanker_leher_dan_kepala: [3, 12, 15, 21, 30, 31],
  kanker_leher_metastatik: [12],
  kanker_nasofaring: [5, 15],
  kanker_tonsil: [7, 12],
  laringitis: [1, 3, 14, 19, 37],
  neuronitis_vestibularis: [10, 17],
  osteosklerosis: [20, 35],
  otitis_media_akut: [1, 6, 10, 32],
  meniere: [6, 10, 34, 36],
  tonsilitis: [1, 2, 3, 4, 7, 10],
  tumor_syaraf_pendengaran: [2, 20, 38],
  vertigo_postular: [17],
  sinusitis_maksilaris: [1, 2, 4, 5, 8, 9, 11, 28, 33],
  sinusitis_frontalis: [1, 2, 4, 5, 8, 9, 11, 18],
  sinusitis_etmoidalis: [1, 2, 4, 5, 8, 9, 11, 18, 26, 27],
  sinusitis_sfenoidalis: [1, 2, 4, 5, 6, 8, 9, 11, 12],
  perut: [1, 2, 3, 4],
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