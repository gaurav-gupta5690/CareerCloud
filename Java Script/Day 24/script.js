let a = prompt("Enter Any Number");
let b = parseInt(a);

if(a%8==0 && a%5==0)
    {
        Ans="divisible By Both";
    }
else if(a%8==0)
    {
        Ans="Divisible By 8";
    }
else if(a%5==0)
    {
        Ans="Divisible By 5"
    }    
else{
    Ans="Divisible By None"
}

document.getElementById("a").innerHTML=Ans;