
// In JS arrays can store heterogeneous data types.

let arr = [1, 2, 3, "Rambhau", true, null, undefined, {name: "Rambhau"}, [1, 2, 3]];
console.log(arr[0]);

console.log(arr.indexOf("Rambhau")); 


arr.push("Ramesh");
console.log("After pushing Ramesh:", arr);

arr.pop();
console.log("After popping:", arr);

arr.shift();
console.log("After shifting:", arr);

arr.unshift("Ramesh");
console.log("After unshifting Ramesh:", arr);



arr.forEach(item => {
    console.log("This is the item in the array:", item);
});

let arr1 = arr.map((item )=> {
    if(typeof item === "number"){
        console.log("This is the item in the array:", item);
        return item * 2;
    }
    else{
        console.log("This is not a number:", item);
    }
});
console.log("This is the new array after mapping:", arr1);


// filter method

let filarr = arr.filter((item) => {
    if(typeof item === "string"){
        return item.length > 2;
    }
});

console.log("This is the new array after filtering:", filarr);


let findarr = arr.find((item) => {
    if(typeof item === "string"){
        return item.length > 2;
    }
});

console.log("This is the new array after finding:", findarr); // it return first ocuring element

let findIndexarr = arr.findIndex((item) => {
    if(typeof item === "string"){
        return item.length > 2;
    }   
});
console.log("This is the new array after finding index:", findIndexarr); // it return first ocuring element index


//splice(index, how many elements to remove, elements to add) 

arr.splice(0, 1); // it will remove the first element from the array
console.log("After splicing or removing:", arr);

arr.splice(0, 0, "Gana");
console.log("After splicing or adding:", arr); // it will add the element at the first index of the 

arr.splice(1, 0, "Gana", 5);
console.log("After splicing or adding:", arr); // it will add the element at the first index of the array and remove the second element from the array



console.log(arr.slice(0,3));




console.log(arr.concat([1, 2, 3])); // it will concat the two arrays and return a new array