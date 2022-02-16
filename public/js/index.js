console.log("Hello World");

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

