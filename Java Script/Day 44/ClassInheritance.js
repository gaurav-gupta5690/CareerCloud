//Example 1

class person{
    eat (){
        document.getElementById("aa").innerHTML=("eat");
    }
    sleep()
    {
        document.getElementById("bb").innerHTML=("sleep");
    }
}
class Engineers extends person{
    work()
    {
        document.getElementById("cc").innerHTML=("Solve problems, bulds Somethings");

    }
}
let obj = new Engineers();
obj.eat();
obj.sleep();
obj.work();



//Example 2


class per{
    aa (){
       let a = "Day";
       return a;
    }

    bb()
    {
        let b = "Night";
       return b;
    }
}

class DayNight extends per{
    cc()
    {
        let c = "Good Morning OR Good Night";
       return c;

    }
}

let xyz = new DayNight();
document.getElementById("dd").innerHTML=xyz.aa();

document.getElementById("ee").innerHTML=xyz.bb();

document.getElementById("ff").innerHTML=xyz.cc();