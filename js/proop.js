import {Chart} from './mychart.js'
import {progresses} from './pcharts.js'

const element = document.getElementById('progresses')

const chart = new Chart(element)

progresses.forEach(element => {
  chart.addChart(element)
});

setTimeout(() => {
  chart.changeChart('Hello', 70)
}, 1000)