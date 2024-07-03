// let a = [5, 4, 4, 6, 2, 5, 6, 4];
// let b = prompt("Enter Any Number");
// let b1=parseInt(b);

// let c = 0;
// for(let i  = 0; i < a.length; i++)
//     {
//         if (a[i]==b1)
//             {
//                 c++
//             }
//     }

//     document.getElementById("aa").innerHTML= c;


let e = [5, 4, 4, 6, 2, 5, 6, 4];
let d = prompt("Enter Any Number to count");
let d1=parseInt(d);

let f = 0;
for(let i  = 0; i < e.length; i++)
    {
        if (e[i]==d1)
            {
                document.getElementById("bb").innerHTML= "Element is Found At the Position "+(i+1);

            }
        else{
            document.getElementById("aa").innerHTML="Number Is Not Found!!!!"
        }
    }

   