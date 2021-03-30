import {Chart} from './mychart.js'

const progresses = [
  {name: 'Laravel shop', value: 9, color: 'orange'},
  {name: 'Laravel 8 new shop', value: 4, color: 'blue'},
  {name: 'Vue.js', value: 30, color: 'green'},
  {name: 'Hello', value: 60, color: '#cce'},
  // {}
]

const element = document.getElementById('progresses')

const chart = new Chart(element)

progresses.forEach(element => {
  chart.addChart(element)
});
