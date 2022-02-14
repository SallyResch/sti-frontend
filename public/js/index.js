console.log("Hello World");

var anElement = document.getElementById("app")
anElement.innerHTML = "<button onClick='buttonClick()'>Click me</button>";

function buttonClick() {
  var x = document.createElement("TABLE");
  x.setAttribute("id", "myTable");
  document.body.appendChild(x);

  var tableRow = document.createElement("TR");
  tableRow.setAttribute("id", "myTr");
  document.getElementById("myTable").appendChild(tableRow);

  var td = document.createElement("TD");
  var tCell = document.createTextNode("cell");
  td.appendChild(tCell);
  document.getElementById("myTr").appendChild(td);
}
/*var app = document.getElementById("app")
app.appendChild(anElement)

function buttonClick() {
  anElement.outerHTML = "<strong>Sally</strong>"
}

function createRow() {
  var allow = document.createElement("tr")
  allow.appendChild(createCell())
}

function createCell() {
  var aCell = document.createElement("td")
  return aCell;
}*/




/*setTimeout(age, 3000)
function age() {
  console.log("aging game")
  setTimeout(age, 3000)
}*/