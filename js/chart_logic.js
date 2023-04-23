import { Chart } from "chart.js/auto";

function showChart(matchDiseases) {
  // chart.js
  const sortedDiseases = Object.fromEntries(
    Object.entries(matchDiseases).sort(([,a],[,b]) => b-a)
  );
  const ctx = document.getElementById('myChart');

  const data = {
    labels: Object.keys(sortedDiseases).map((key) => [key]),
    datasets: [
      {
        label: 'Percentage',
        data: Object.keys(sortedDiseases).map((key) => [sortedDiseases[key]]),
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
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Disease Chart based on symptoms'
        }
      }
    },
  };

  new Chart(ctx, config);
}