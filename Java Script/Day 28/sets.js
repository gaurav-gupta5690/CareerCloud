//Example 1

// const Demo = new Set (["x","m","n","y"]);

// document.getElementById("aa").innerHTML="The Set is of "+ Demo.size+" Values";


//Example 2

const Demo = new Set()

Demo.add("One");
Demo.add("Two");
Demo.add("Three");
Demo.add("Three");
Demo.add("Four");
Demo.add("Five");
Demo.add("Six");


let text="";
for(const i of Demo){
    text += i + "<BR>";
}
document.getElementById("aa").innerHTML=text;