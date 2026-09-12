// function passed as argument to another function


function doPooja(callback){
    console.log("Doing Pooja");
    setTimeout(() => {
    callback();}, 3000);
}

function offerPrasad(callback){
    console.log("Offering Prasad");
    setTimeout(() => {
    callback();}, 3000);
}

function wantmorePrasad(){
    console.log("Delicious Prasad");
}


function cleanTemple(){
    console.log("Cleaning Temple");
}

doPooja(() => offerPrasad(() => wantmorePrasad(() => cleanTemple())));





// without callbacks order depends on function

// with callback-control we maintaint the order of function


// Another example 

function prepBiryani(order, callback){
    console.log(`Prepare ${order.item}`);

    setTimeout(() => {
        console.log(`${order.item} is ready`);
        callback(order.price);
    }, 2000);
}

function displayPrice(price) {
    console.log(`Total Price : ${price}`);
}

function orderBiryani(){
    const order={
        item:"Vegetable Biryani",
        price:350
    };
    console.log(`Order Placed for ${order.item}`);
    prepBiryani(order, displayPrice);
}

orderBiryani();

