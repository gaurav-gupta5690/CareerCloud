let text = "";

for(let i = 1; i <= 10; i++)

    {
        if(i%2!=0){
        text += "The Number is " + i + "<BR>";
    }

}

document.getElementById("aa").innerHTML=text;