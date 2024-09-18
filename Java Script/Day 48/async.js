function getData(dataID){
    return new Promise((resolve, reject)=> {
        setTimeout (()=>{
            document.getElementById("aa").innerHTML="data"+ dataID;
            resolve("successs");
        }
    ,2000);
    });
}

async function getAlldata(){
    document.getElementById("bb").innerHTML=("getting data 1.....");
    await getData(1);
    document.getElementById("cc").innerHTML=("getting data 2.....");
    await getData(2);
    document.getElementById("dd").innerHTML=("getting data 3.....");
    await getData(3);
};

getAlldata();



