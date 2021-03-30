export class Chart {
  constructor(el) {
    this.charts = []
    this.lightColor = 'lightGrey'
    this.darkColor = 'darkBrown'
    this.c = document.createElement('div')
    this.c.classList.add('progresses')
    el.appendChild(this.c)
  }

  addChart(chart) {
    this.charts.push(chart)
    this.renderCharts()
  }

  renderCharts(){
    this.c.innerHTML = ''
    this.charts.forEach(chart => {
      this.c.innerHTML += `<div class="pcard"><div class="charttitle">${chart.title || '(none)'}</div><div class="ptitle">${chart.name || '?'}</div><div class="prdescr">${chart.desc || '...'}</div><div class="pbar"><div class="progrbar" style="width:${chart.value || 0}%;background-color:${chart.color || '#393'};">${chart.value || 0}%</div></div></div>`
    });
    this.setColors()
  }

  changeChart(name, value) {
    this.charts.map(chart => {
      if(chart.name === name) {
        chart.value = value
      }
    })
    this.renderCharts()
  }

  setColors(){
    const colors = document.querySelectorAll('.progrbar')
    if(colors) {
      colors.forEach(el => {
        let estyle = (getComputedStyle(el).backgroundColor) // https://zellwk.com/blog/css-values-in-js/
        el.style.color = estyle.substr(estyle.indexOf('(') + 1).replace(')', '').split(',').reduce((a, b) => a + parseInt(b), 0) / 3 > 127 ? this.darkColor : this.lightColor
      })
    }
  }
}