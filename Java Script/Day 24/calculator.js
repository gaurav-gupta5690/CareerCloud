let a = prompt("Enter Your Number");
let b = prompt("Enter Your Symbol");
let c = prompt("Enter Your Number");

let a1=parseInt(a);
let c1=parseInt(c);

switch(b)
{
    case "+":
        x=a1+c1;
        document.getElementById("aa").innerHTML=x
        break;
    case "-":
        x1=a1-c1;
        document.getElementById("aa").innerHTML=x1
        break;
    case "*":
        x2=a1*c1;
        document.getElementById("aa").innerHTML=x2
        break;
    case "/":
        x3=a1/c1;
        document.getElementById("aa").innerHTML=x3
        break;
    default: x4 = "Invalid Code...";
    document.getElementById("aa").innerHTML=x4
}