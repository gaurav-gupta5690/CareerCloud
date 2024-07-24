let a = document.querySelector("#a");
let b = document.querySelector("body");
let c = "light";

a.addEventListener("click",()=>{
    if (c==="light"){
        c="Dark";

        b.classList.add("dark")
        b.classList.remove("light")
    }

    else{
        c = "light";
        b.classList.add("light");
        b.classList.remove("dark")
    }
});
