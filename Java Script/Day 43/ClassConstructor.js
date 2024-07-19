//Example 1

class car{
    constructor(name,year)
    {
        this.name=name;
        this.year=year;
    }
}

const a = new car("Nexon",2024);
const b = new car("BMW",2023);
const c = new car("Oddy",2014);
const d = new car("Thar",2022);


document.getElementById("aa").innerHTML=a.name+" "+a.year;
document.getElementById("bb").innerHTML=b.name+" "+b.year;
document.getElementById("cc").innerHTML=c.name+" "+c.year;
document.getElementById("dd").innerHTML=d.name+" "+d.year;



//Example 2

class Fruit{
    constructor(nam,Quantity,Price,)
    {
     
        this.Quantity=Quantity;
        this.nam=nam;
        this.Price=Price;
    }
}

const e = new Fruit("Apple","1Kg =","200₹")
const f = new Fruit("Orange","1Kg =","100₹")
const g = new Fruit("Grapes","1Kg =","320₹")
const h = new Fruit("Mango","1Kg =","50₹")
const i = new Fruit("banana","1Kg =","60₹")

document.getElementById("ee").innerHTML=e.nam+" "+e.Quantity+" "+ e.Price;
document.getElementById("ff").innerHTML=f.nam+" "+f.Quantity+" "+ f.Price;
document.getElementById("gg").innerHTML=g.nam+" "+g.Quantity+" "+ g.Price;
document.getElementById("hh").innerHTML=h.nam+" "+h.Quantity+" "+ h.Price;
document.getElementById("ii").innerHTML=i.nam+" "+i.Quantity+" "+ i.Price;



//Example 3

class carr{
    constructor(xyz,abc)
    {
        this.xyz=xyz;
        this.abc=abc;
    }


age()
{
    const date = new Date();
    return date.getFullYear() - this.abc;
}
}
const j = new carr("Nexon", 2020);
document.getElementById("jj").innerHTML="My car is " + j.age()+" Year Old";


//Example 4


class area{
    constructor(b,h)
    {
        this.b=h;
        this.h=h;
    }


areaoftringle()
{
    let a = 0.5*this.b*this.h;
    return a;
}
}
const ar = new area(3,8);

document.getElementById("kk").innerHTML="Area of Tringle =" + ar.areaoftringle();