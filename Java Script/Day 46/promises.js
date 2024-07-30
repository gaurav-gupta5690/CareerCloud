
// let promise = new promise((resolve, reject)=>{__})


// let promise = new Promise((resolve, reject)=>{
//     document.getElementById("aa").innerHTML="I am in Promise";

//     reject("Some Error Ocuured!!");
// });



function getdata(dataID, getNextData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.getElementById("bb").innerHTML="Data"+dataID;

            resolve("Success")
            
            if(getNextData)
            {
                getNestData();
            }
        },5000);
    });
};

getdata(308,"Books");