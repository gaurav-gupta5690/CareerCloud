function show(a1)
{
    document.getElementById("aa").innerHTML=a1;
}

function sum(n1,n2){
    let sum1 = n1 + n2;
    return sum1;
}

let c = sum (6,3);
show(c);



function showw(b1)
{
    document.getElementById("bb").innerHTML=b1;
}
function summ (m1,m2, callback)
{
    let s = m1+m2;
    callback(s);
}

summ(6,2, showw);