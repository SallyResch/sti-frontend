var tableData = [
  { name: "AIK", points: 9 },
  { name: "DIF", points: 6 },
  { name: "BP", points: 5 },
  { name: "HSK", points: 3 }
]
tableData = JSON.stringify(tableData)
console.log(tableData)

var ettElement = document.getElementById("app")

var aTable = document.createElement("table")
aTable.appendChild(createRow())

ettElement.appendChild(aTable)


function buttonClick() {
  aTable.appendChild(createRow())
}

function createRow() {
  var aRow = document.createElement("tr")
  aRow.appendChild(createCell())
  return aRow
}

function createCell() {
  var aCell = document.createElement("td")
  return aCell;
}

function createTable() {

}
/*console.log("hello world")

function age() {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "/js/data.json")
  xhr.onload = function () {
    var data = JSON.parse(this.response)
    createTable(data)
  }
  xhr.send()
}

function createTable(data) {
  var appElement = document.getElementById("app")
  var aTable = document.createElement("table")
  appElement.appendChild(aTable)
  aTable.appendChild(createRow(data[0].name, data[0].points))
  aTable.appendChild(createRow(data[1].name, data[1].points))
  aTable.appendChild(createRow(data[2].name, data[2].points))
  aTable.appendChild(createRow(data[3].name, data[3].points))
}

function createRow(name, points) {
  var aRow = document.createElement("tr")
  aRow.appendChild(createCell(name))
  aRow.appendChild(createCell(points))
  return aRow
}

function createCell(content) {
  var aCell = document.createElement("td")
  aCell.innerHTML = content
  return aCell;
}*/