//1 simple function

let a = prompt("Enter The Hight");
let height = parseInt(a);
let b = prompt("Enter The Width");
let width = parseInt(a);
let c ="";

function area()
{
    c += height+width;
    return c;
}

document.getElementById("aa").innerHTML= area();







//2 parameterlized Function

function addition(a,b)
{
    return a+b;
}

document.getElementById("bb").innerHTML= addition(4,6);






//3 Count Arguments Given

function additionn(a,b,c)
{
    return arguments.length;
}

document.getElementById("cc").innerHTML= additionn(4,6);




//4 Constructor
const num = new Function("x","b","return x*b");

document.getElementById("dd").innerHTML= num(8,6);


//5 constructor  practice

const xyz = new Function("x","y","z", "return x+y+z")

document.getElementById("ee").innerHTML= xyz(4,6,2);

