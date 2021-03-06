let darkTheme = sessionStorage.getItem('theme') == 'dark'
let textAxesColor = '#666666'
let axesColor = '#bbbbbb'

if (darkTheme) {
  textAxesColor = '#fdf7dc'
}

// Chart in main/overview/index.js
let ctx = document.getElementById('chart')
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9'],
    datasets: [{
      label: ['Bán vé'],
      data: [12, 19, 3, 5, 2, 3, 2, 5, 16],
      backgroundColor: '#ff6384'
    }, {
      label: ['Đồ ăn/uống'],
      data: [2, 9, 3, 5, 2, 13, 12, 5, 1],
      backgroundColor: '#636384'
    }]
  },
  options: {
    legend: {
      display: true,
      fontColor: textAxesColor,
      labels: {
        fontColor: textAxesColor
      },
      position: 'bottom'
    },
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        responsive: true,
        stacked: true,
        ticks: {
          fontColor: textAxesColor
        }
      }],
      yAxes: [{
        responsive: true,
        stacked: true,
        gridLines: {
          color: axesColor
        },
        ticks: {
          beginAtZero: true,
          fontColor: textAxesColor
        }
      }]
    }
  }
})
