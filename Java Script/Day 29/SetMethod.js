//Example 1 -----> Boolean Ans


// const a = new Set (["a","b","x","y"]);
// result = a.has("y");

// document.getElementById("aa").innerHTML=result;


//Example 2 ------> direct output

// let textt = "";

// a.forEach(function(Values)
// {
//     textt += Values + "<BR>";
// })

// document.getElementById("bb").innerHTML=textt;


//Example 3 ---------> value Method

const  b = new Set  (["a","b","x","y"]);

const c = b.values();

let text="";

for(const i of c){
    text += i+"<BR>"
}

document.getElementById("cc").innerHTML=text;
