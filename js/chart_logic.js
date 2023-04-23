import { Chart, scales } from "chart.js/auto";

let diseasesChart = null

function showChart(matchDiseases) {
  // chart.js
  const ctx = document.getElementById('myChart').getContext("2d")
  if (diseasesChart) diseasesChart.destroy()
  const sortedDiseases = Object.fromEntries(
    Object.entries(matchDiseases).sort(([,a],[,b]) => b-a)
  );


  const data = {
    labels: Object.keys(sortedDiseases).map((key) => key),
    datasets: [
      {
        label: 'Percentage',
        data: Object.keys(sortedDiseases).map((key) => sortedDiseases[key]),
        borderColor: 'rgb(54, 162, 235)',
      }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 2,
        }
      },
      // responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Disease Chart based on symptoms'
        }
      },
      scales: {
        x: {
          min : 0,
          max: 100
        }
      }
    },
  };

  diseasesChart = new Chart(ctx, config);
}

export {showChart}