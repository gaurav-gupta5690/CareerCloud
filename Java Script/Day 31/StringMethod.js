let str = "Gaurav Gupta";
let newstr = str.toUpperCase();
document.getElementById("aa").innerHTML=newstr;


let Name = "Gaurav Gupta";
let NewName = str.toLowerCase();
document.getElementById("bb").innerHTML=NewName;

let nbr = "0744353765";
document.getElementById("cc").innerHTML=nbr.slice(1,3);

let nmme = "Gaurav Gupta";
let nmmestr = str.trim().length;
document.getElementById("dd").innerHTML=nmmestr;

let a1 = "Ram";
document.getElementById("ee").innerHTML=a1.replace("R","S");

let b1 = "Gaurav";
document.getElementById("ff").innerHTML=b1.replaceAll("Gaurav", "Ankush");