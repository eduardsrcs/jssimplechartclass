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

setTimeout(() => {
  chart.changeChart('Vue.js', 40)
}, 2000)

setTimeout(() => {
  chart.changeChart('Laravel 8 new shop', 14)
}, 4000)
