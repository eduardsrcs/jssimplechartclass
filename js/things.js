

function renderTableData(data) {
  console.log(data);
  if (Array.isArray(data) && data.length) {
    let out = ''
    data.forEach((el, i) => {
      out += `<tr>
      <td>${i + 1}</td>
      <td>${el.name}</td>
      <td>${el.title}</td>
      <td>${el.desc}</td>
      <td>${el.paths || ''}</td>
      <td>${el.stat}</td>
    </tr>`
    })
    tabledata.innerHTML = out
  }
}

renderTableData(thingsData)