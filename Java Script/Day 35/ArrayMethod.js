const fooditems= ["Potato","Apple","Litchi"]

document.getElementById("aa").innerHTML=fooditems;


//Push() Methods
fooditems.push("Greaps")
document.getElementById("aa").innerHTML=fooditems;


//Pop() Methods

fooditems.pop()
// document.getElementById("bb").innerHTML=fooditems;
document.getElementById("bb").innerHTML=fooditems.pop();


//toString() Method
fooditems.toString()
document.getElementById("cc").innerHTML=fooditems.toString();


//shift() Method

fooditems.shift();
document.getElementById("dd").innerHTML=fooditems;



//unshift() Method

fooditems.unshift("Orange")
document.getElementById("ee").innerHTML=fooditems;

