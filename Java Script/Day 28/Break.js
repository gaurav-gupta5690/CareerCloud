let text=""

for (let i = 0; i < 10; i++) {
    if (i == 7) { break; }
    text += "The number is " + i + "<br>";
  }

  document.getElementById("aa").innerHTML=text