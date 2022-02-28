const FIRST_UPDATE = 0
const UPDATE_INTERVALL = 1000

setTimeout(age, FIRST_UPDATE)

function age() {
  let xhr = new XMLHttpRequest()
  //xhr.open("GET", "http://localhost:3001/football")
  xhr.open("GET", "/js/data.json")
  xhr.onload = function () {
    let data = JSON.parse(this.response)
    createTable(data)
    setTimeout(age, UPDATE_INTERVALL)
  }
  xhr.send()
}

function createTable(data) {
  let appElement = document.getElementById("app")
  appElement.textContent = '';
  let aTable = document.createElement("table")
  appElement.appendChild(aTable)
  console.log(data[0])
  aTable.appendChild(createRow(data[0].name, data[0].points, data[0].logo))
  aTable.appendChild(createRow(data[1].name, data[1].points, data[1].logo))
  aTable.appendChild(createRow(data[2].name, data[2].points, data[2].logo))
  aTable.appendChild(createRow(data[3].name, data[3].points, data[3].logo))
}

function createRow(name, points, url) {
  let aRow = document.createElement("tr")
  aRow.appendChild(createImageCell(url))
  aRow.appendChild(createCell(name))
  aRow.appendChild(createCell(points))
  return aRow
}

function createCell(content) {
  var aCell = document.createElement("td")
  aCell.innerHTML = content
  return aCell;
}

function createImageCell(url) {
  var aCell = document.createElement("td")
  var anImage = document.createElement("img")
  anImage.src = url
  anImage.classList.add("tableLogo")
  aCell.appendChild(anImage)
  return aCell;
}


/*console.log("Hello World");

//Mikaels kod för att skapa en tabell med rader och en cell i varje ny rad
var ettElement = document.getElementById("app")

var aTable = document.createElement("table")
aTable.appendChild(createRow())

ettElement.appendChild(aTable)

function buttonClick2() {
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

//egen kod
function buttonClick() {
  anElement.outerHTML = "<strong>Sally</strong>"
}

/*
//Hur man sätter igång ett spel
setTimeout(age, 3000)
function age() {
  console.log("aging game")
  setTimeout(age, 3000)
}*/

