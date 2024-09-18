let n = prompt("Enter a Number");
let arr=[];

for(let i = 1; i<=n; i++)
{
    arr[i-1]=i;
    document.getElementById("aa").innerHTML=(arr);

    let sum = arr.reduce((res,carr)=>{
        return res+carr;
    });

    document.getElementById("bb").innerHTML=(sum);
}