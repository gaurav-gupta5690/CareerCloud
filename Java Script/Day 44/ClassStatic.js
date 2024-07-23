class A{
    constructor(Name)
    {
        this.Name=Name;
        document.getElementById("bb").innerHTML=this.Name;
    }

static hello()
{
    return "Hello";
}
}
const a = new A("Gaurav");

document.getElementById("aa").innerHTML= A.hello();