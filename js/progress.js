const progresses = [
  {name: 'Laravel shop', value: 09, color: 'orange'},
  {name: 'Laravel 8 new shop', value: 04, color: 'blue'},
  {name: 'Vue.js', value: 30, color: 'green'},
  {name: 'Hello', value: 60, color: 'yellow'}
]
const progress = document.querySelector('.progresses')

const renderProgresses = (el, data) => {
  let out = ''
  if (Array.isArray(progresses))
  data.forEach(p => {
    out += `<div class="pcard"><div class="ptitle">${p.name}</div><div class="pbar"><div class="progrbar" style="width:${p.value}%;background-color:${p.color}">${p.value}%</div></div></div>`
  })
  el.innerHTML = out
  const colors = document.querySelectorAll('.progrbar')
  if(colors) {
    colors.forEach(e => {
      let estyle = (getComputedStyle(e).backgroundColor) // https://zellwk.com/blog/css-values-in-js/
      e.style.color = estyle.substr(estyle.indexOf('(') + 1).replace(')', '').split(',').reduce((a, b) => a + parseInt(b), 0) / 3 > 127 ? 'darkBrown' : 'lightGrey'
    })
  }
}

renderProgresses(progress, progresses)
