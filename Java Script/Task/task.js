let bulb = document.querySelector("#bulb")

let btn = document.querySelector("button")

let x = 0

btn.addEventListener("click", function(){
    if (x == 0){
    btn.innerHTML= "OFF"
    
    console.log("click more")
    x = 1
}
    
    else{
        btn.innerHTML= "ON"
        bulb.style.backgroundColor = "transparent"
        console.log("again click")
        x = 0
    }
}
)