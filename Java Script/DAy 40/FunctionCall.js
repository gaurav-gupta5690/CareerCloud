function a(num){
    document.getElementById("a").innerHTML=num
}

function  b(x,y){
    let z = x+y;
    return z;
}
let output = b(8,6);
a(output);