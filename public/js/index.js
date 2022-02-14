console.log("Hello World");

var anElement = document.getElementById("app")
//anElement.innerHTML = "Hello World"
//anElement.outerHTML = "Hello World"

var app = document.getElementById("app")
app.appendChild(anElement)


/*setTimeout(age, 3000)

function age() {
console.log("aging game")
setTimeout(age, 3000)
}*/