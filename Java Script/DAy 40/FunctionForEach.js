let text = "";

const Fruits = ["Apple","banana","Mango","Orange"];

Fruits.forEach(MyFunction)

document.getElementById("aa").innerHTML=text;

function MyFunction (item,index)
{
    text += index + ":" + item + ";"+ "<br>";
}