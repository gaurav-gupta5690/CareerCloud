let text=""

for (let i = 0; i < 10; i++) {
    if (i == 7) { continue; }
    text += "The number is " + i + "<br>";
  }

  document.getElementById("aa").innerHTML=text