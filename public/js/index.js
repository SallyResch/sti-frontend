console.log("Hello World");

var anElement = document.getElementById("app")
anElement.innerHTML = "<button onClick='buttonClick()'>Click me</button>";

function buttonClick() {
  anElement.outerHTML = "<strong>Sally</strong>"
}

var app = document.getElementById("app")
app.appendChild(anElement)


/*setTimeout(age, 3000)
function age() {
  console.log("aging game")
  setTimeout(age, 3000)
}*/