function doPooja(){
    return new Promise((resolve, rejected) => {
    let poojaCompleted = true;
    if(poojaCompleted){
        console.log("Doing Pooja");
        resolve();
    }else{
        rejected("Pooja failed so no Prasad")
    }

    })
}

function offerPrasad(){
    console.log("Offering Prasad");
}
function eatPrasad(){
    console.log("Eating Prasad");
}

doPooja()
.then(() => {offerPrasad();})
.then(() => {eatPrasad();})
.catch((error) => console.log(error));




const dataobj = [
    {
        name : "Rambhau", age:21
    },
    {
        name : "Gana", age:14
    }
] 

function getData(){
    setTimeout(() =>{ 
    let output = "";
    dataobj.forEach((data, index) => {
        output+=`${data.name}`
    })
    console.log(output);
}, 1000);
}

function createData(newData){

    return new Promise((res, rej) => {
        let flag = true;
    setTimeout(() => {
        dataobj.push(newData);
        if(flag){
            res("Addition Successful");
        }else{
            rej("Addition not Successful");
        }
    }, 3000);})
}

createData({name:"Balasaheb", age:19})
.then(() => {getData();})
.catch(error => console.log(error));
//getData();



function prepBiryani(order){
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(true)
            {res(order.price);}
            else {rej("Order Failed")};
        }, 2000);

    });
}

function displayPrice(price){
    console.log(`Total Price : ${price}`);
}

function orderBiryani(){
    return new Promise((res, rej) => {
        const biryaniAvailable=true;
        if(biryaniAvailable){
            res("Biryano is available");
        }else{
            rej("Insufficient Biryani");
            return;
        }
        const order ={
            item:"Vegetable Biryani",
            price:350
        };
        console.log(`Order placed for ${order.item}`);
        prepBiryani(order)
        .then(price => {
            displayPrice(price);
            res(price);
        })
        .catch(error => rej(error));
    });
}

orderBiryani()
.catch(error => console.log(error))