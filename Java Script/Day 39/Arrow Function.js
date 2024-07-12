// const mult =(a,b)=>{
//     return a*b;
// }

// document.getElementById("aa").innerHTML=mult(6,3);



// const Name  =(z)=> 
// {
//     if (z<=5) return z*z;
//     else return z-1;
// }
// document.getElementById("bb").innerHTML=Name(7);


// const multi = (a,b) => a*b;

// document.getElementById("cc").innerHTML=multi;

let a = "";

const Loop = ()=> 
{

for(let i = 1; i <= 10; i++)

    {
        if(i%2==0){
        a += "The Number is " + i + "<BR>";
    }

}

document.getElementById("bb").innerHTML=a;
}

document.getElementById("dd").innerHTML=Loop();