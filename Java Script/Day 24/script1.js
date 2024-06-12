let a = prompt("Enter 1st Number");
let b = prompt("Enter 2nd Number");
let c = prompt("Enter 3nd Number");

let a1 = parseInt(a);
let b1 = parseInt(b);
let c1 = parseInt(c);


if(a1>b1>c1)
    {
    document.getElementById("aa").innerHTML=a1 + " First Number is Greater";
    }
else if (b1>a1>c1){
    document.getElementById("aa").innerHTML=b1 + " Second Number is Greater";
                  }
else{
    document.getElementById("aa").innerHTML=c1 + " Third Number is Greater";
    }