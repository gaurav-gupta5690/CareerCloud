const letters = new Set(["Gaurav","Ajay","Piyush","Pratik","Gaurav"]);
let text = "";

for (const a of letters) {
  text += a + "<br>";
}

document.getElementById("aa").innerHTML = text;