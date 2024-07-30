// //Then Example

const getPromise =()=>{
    return new Promise((resolve,reject)=>{
        document.getElementById("aa").innerHTML=("I am A Promises")
        resolve("Success");
    });
};
let promise = getPromise();
promise.then(()=>{
    document.getElementById("bb").innerHTML=("Promises Fullfilled")
});








//Catch Example

const getPromisee=()=>{
    return new Promise((resolve,reject)=>{
        document.getElementById("cc").innerHTML=("I am a Promise");
        reject("Error");
    });
};

let Promisee = getPromisee();
Promisee.then((resolve)=>{
    document.getElementById("dd").innerHTML="Promises Fulfilled";
});

Promisee.catch((reject)=>{
    document.getElementById("ee").innerHTML="Rejected";
});