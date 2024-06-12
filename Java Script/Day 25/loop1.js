const fruits = ["Apple", "Banana", "Orange", "Kiwi", "Pineapple"];

let a=""

for(let i=0; i<fruits.length; i++)
    {
        a +=fruits[i] + "<BR>";
    }

    document.getElementById("aa").innerHTML=a;