function getData(dataID){
    return new Promise((resolve, reject)=> {
        setTimeout (()=>{
            document.getElementById("aa").innerHTML="data"+ dataID;
            resolve("successs");
        }
    ,2000);
    });
}


(async function(){
    document.getElementById("aa").innerHTML=("Getting Data 1...");
    await getData(1);
    document.getElementById("bb").innerHTML=("Getting Data 2...");
    await getData(2);
    document.getElementById("cc").innerHTML=("Getting Data 3...");
    await getData(3);
})

();