// let user = prompt("Enter Your Username");

// document.getElementById("aa").innerHTML="@"+user+user.length;




let a = [45, 4, 9, 16, 25];
let b = "";

for(let i = 0; i<=a.length; i++)
    {
        b+=i+"<BR>";
    }
document.getElementById("bb").innerHTML=b;



for(let i = 0; i<=a.length; i++)
    {
        if(i%2==0)
            {
                b+=+"<BR>"
            }
    }


    let c = [5, 4, 4, 6, 2];
    let sum =0;

    for(let i=0; i<c.length; i++)
        {
            sum=sum+c[i];
        }
        document.getElementById("cc").innerHTML="Total of Sum =" + sum;