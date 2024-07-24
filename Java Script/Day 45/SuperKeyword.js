//   class A{
//     constructor(m,n){
//         let x = "Area of Rectangle = " + (m*n);
//         document.getElementById("aa").innerHTML=x
//     }
//     sum(a)
//     {
//         let x1 = "Area of Square = " + (a*a);
//         document.getElementById("bb").innerHTML=x1
//     }
//   }

//   class B extends A
//   {
//     constructor(r)
//     {
//         super(5,4);
//         this.r=r;
//         let r1 = "Area of Circle = " + 3.14*r*r;
//         document.getElementById("cc").innerHTML=r1
//     }

//     display()
//     {
//         super.sum(9);
//         document.getElementById("dd").innerHTML="I Am In Child Class"
//     }
    
//   }

//   const obj = new B(4);
//   obj.display();


class A{
    constructor(){
        let a1 = prompt("Enter Your Length Of Rectangle");
        this.a=parseInt(a1);
        let a2 = prompt("Enter Your hight Of Rectangle");
        this.a=parseInt(a2);
        document.getElementById("aa").innerHTML= "Area of Rectangle = " + a1+a2

    }
    sum(a)
    {
        let b1 = prompt("Enter Your Area of Square Number")
        this.b= parseInt(b1);
        document.getElementById("bb").innerHTML="Area OF Area Of Square = " +b1*b1;
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