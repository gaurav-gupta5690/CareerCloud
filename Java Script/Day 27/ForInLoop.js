const cars=["Nexon ","i1o ","BMW"];

let text="";

for(let i in cars)
    {
        text +=cars[i];
    }

    document.getElementById("aa").innerHTML=text;




    let name = "Gaurav Gupta";

    let textt="";

    for(let i in name)
        {
            textt +=name[i];
        }
        document.getElementById("bb").innerHTML=textt;





        let Student= {
            Name:"Gaurav ",

            age: 21,

            class: " JS",
        };

        let texttt="";
        for(let i in Student)
            {
                texttt += Student[i]+" ";
            }

            document.getElementById("cc").innerHTML=texttt;