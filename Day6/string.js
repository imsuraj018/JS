let str = "Rambhau is a good boy";

console.log(str.indexOf("is")); 

console.log(str.charAt(5));

console.log(str.split(" "));


console.log(str.substring(0, 10)); 


console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.concat(" and he is very smart pal"));

console.log(str.replace("good", "bad"));

console.log(str.includes("good")); // it will return true because the string contains the word "good"

console.log("It give first index of 'a': " + str.indexOf("a"));

console.log("It give last index of 'a': " + str.lastIndexOf("a"));


console.log(str.startsWith("Rambhau")); // it will return true because the string starts with "Rambhau"

console.log(str.endsWith("boy")); // it will return true because the string ends with "boy"

console.log(str.replace("boy", "pal"));
console.log(str);

console.log(str.trim()); // it will remove the white spaces from the start and end of the string