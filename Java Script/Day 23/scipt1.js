// let a = prompt("Enter Any Number");
// let b = prompt("Enter Another Number");

// let a1 = parseInt(a);
// let b1 = parseInt(b);


//Example 1

// if(a1>b1)
//     {
//         document.getElementById("aa").innerHTML=a1 + " is Greater";
//     }
// else{
//     document.getElementById("aa").innerHTML=b1 + " is Greater";
// }

//Example 2


// if(a1>b1)
//     {
//         z=a1+" is Greater"
//     }
// else{
//     z=b1+ " is Greater"
// }
// document.getElementById("aa").innerHTML=z;


let a = prompt("Enter Your Join Year");
let b = prompt("Enter Your Current Year");

let a1 = parseInt(a);
let b1 = parseInt(b);

let year = (b1-a1);

if(year > 3)
    {
        m="Bonus Of Rs 25000/- is Applicable";
    }
else{
    m="Sorry";
}

document.getElementById("aa").innerHTML=m;