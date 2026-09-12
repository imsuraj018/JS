// Sync

console.log("Start");
function greet(){
    for(let i = 0; i < 1; i++){
        for(let j = 0; j < 100; j++)
            {}
    }
    console.log("hello");
}
greet();
console.log("End");


//Async

//console.log("Start");
//setTimeout(() => (console.log("hello");))










function prepPooja(){
    console.log("Arrangement of items");
}


function doPooja(){
    setTimeout(() => { // async parameter
        console.log("doing pooja");

    },3000);
}

function offerPrasad(){
    console.log("Offering Prasad");
}

function eatPrasad(){
    console.log("Eat Prasad");
}

prepPooja();
doPooja(); // async part
offerPrasad();
eatPrasad();

// In async, the problem of sequence or order issue aroses

// we use callbacks, promises and async-await

