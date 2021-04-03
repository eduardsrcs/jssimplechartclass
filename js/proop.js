import {Chart} from './mychart.js'
import {progresses} from './pcharts.js'


const element = document.getElementById('progresses')
const chart = new Chart(element)

progresses.forEach(element => {
  chart.addChart(element)
});

if(localStorage.getItem('night')) document.body.classList.add('night')

nightthemesw.addEventListener('click', () => {
  console.log('click');
  if(localStorage.getItem('night')) {
    document.body.classList.remove('night')
    localStorage.removeItem('night')
  } else {
    document.body.classList.add('night')
    localStorage.setItem('night', true)
  }
})

