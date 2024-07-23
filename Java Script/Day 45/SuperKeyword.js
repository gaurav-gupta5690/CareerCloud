  class A{
    constructor(m,n){
        let x = "Area of Rectangle = " + (m*n);
        document.getElementById("aa").innerHTML=x
    }
    sum(a)
    {
        let x1 = "Area of Square = " + (a*a);
        document.getElementById("bb").innerHTML=x1
    }
  }

  class B extends A
  {
    constructor(r)
    {
        super(5,4);
        this.r=r;
        let r1 = "Area of Circle = " + 3.14*r*r;
        document.getElementById("cc").innerHTML=r1
    }

    display()
    {
        super.sum(9);
        document.getElementById("dd").innerHTML="I Am In Child Class"
    }
    
  }

  const obj = new B(4);
  obj.display();