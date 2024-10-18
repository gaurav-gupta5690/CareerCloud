let a = document.querySelector("#a");

let b = "Light";

a.addEventListener("click",()=>{
    if (b==="Light"){
        b="Dark";

        document.querySelector("body").style.backgroundColor="black";
    }

    else{
        b = "Light";
        document.querySelector("body").style.backgroundColor="White";
    }
});