function a(a1)
{
    document.getElementById("aa").innerHTML=a1;
}

async function b()
{
    return "Hello Students";
}

b().then(
    function(value) {a(value);},
    function(error) {a(error);}
);