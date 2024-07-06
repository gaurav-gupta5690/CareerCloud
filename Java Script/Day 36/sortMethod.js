const a = ["Banana","Grapes","Apple","Orange","Mango"]
a.sort();
document.getElementById("aa").innerHTML="1] "+ a;



const b = ["Banana","Grapes","Apple","Orange","Mango"]
b.reverse()
document.getElementById("bb").innerHTML="2] "+b;



const c = ["Banana","Grapes","Apple","Orange","Mango"]
c.sort();
document.getElementById("cc").innerHTML="3] "+c.reverse();



const d = ["Banana","Grapes","Apple","Orange","Mango"]
const d1 = d.toSorted();
document.getElementById("dd").innerHTML="4] "+d1;



const e = ["Banana","Grapes","Apple","Orange","Mango"]
const e1 = e.toReversed();
document.getElementById("ee").innerHTML="5] "+e1;


const f = [33,44,22,47,34,64,23,54];
f.sort(function(a,b){return a-b});
document.getElementById("ff").innerHTML="6] "+ f;


const g = [33,44,22,47,34,64,23,54];
g.sort(function(){return 0.5-Math.random()});
document.getElementById("gg").innerHTML="7] "+ g;