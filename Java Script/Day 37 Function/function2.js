function acar()

{
    let CarName =6.5;
    let b = "inside :  " + typeof CarName + "    " + CarName;
    document.getElementById("aa").innerHTML=b;
}

acar();

//Object Method


const person ={
    FName : "Ram",
    LName : "Jhoshi",
    Age : 25,
};

document.getElementById("bb").innerHTML= person.FName +" "+ person.LName +" is "+ person.Age + "Year Old"



const child ={
    FName : "Rahul",
    LName : "Singh",
    Space : " ",
    Age : 12,
    fruit : "Apple",
};


document.getElementById("cc").innerHTML= child.FName + child.Space + child.LName + child.Space + "He was a" + child.Space + child.Age + child.Space + "Year Old Child" + child.Space +"And he was Biting a" + child.Space + child.fruit;