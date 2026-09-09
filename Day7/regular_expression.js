// regex are the patterns used to match character combination in string

// it is used to validate, search, replace in strings

//RegExp is object that describes a pattern of characters

let regex = /Rambhau/;
let regex1 = new RegExp("pal");

// Above are the ways to regex expression

text = "Hi, good evening pal";

let n = text.search(regex); // it will return the index of the first match of the regex in the string. If not found it will return -1
let n2 = text.search(regex1);

console.log(n);
console.log(n2);  // it is case sensitive

let m = text.search(/Pal/i); // for case insensitive operation
console.log(m);


let m1 = text.match(/pal|good/i); // it will return the matched string in the array. If not found it will return null
console.log(m1);

let m2 = text.match(/pal/g); // it will return the matched string in the array. If not found it will return null. g is for global search
console.log(m2);

let m3 = text.match(/pal/gi); // it will return the matched string in the array. If not found it will return null. g is for global search and i is for case insensitive search
console.log(m3);


//d flag-find start and end positions of substring


let x = "aaaaaaaaddse";
let regex3 = /(aa)(dd)/d;
let result = x.match(regex3);
console.log("Repetations of given string " + result); // it will return the matched string in the array. If not found it will return null. d is for finding the start and end positions of the substring

console.log(result.indices);

//[] -- character class to match any one of the characters in the brackets
// [^ a] - not a, 
// for any digit [0, 9] and not digit [^0-9]

let text1 = "Hi, good evening pal";
let regex4 = /[aeiou]/d;
let regex5 = /[^aeiou]/d;
let regex6 = /[0-9]/d;
let regex7 = /[^0-9]/d;
let matches = text1.match(regex4);
let matches1 = text1.match(regex5);
let matches2 = text1.match(regex6);
let matches3 = text1.match(regex7);
console.log("Matching group of character " + matches);
console.log("Matching group of character " + matches1);
console.log("Matching group of character " + matches2);
console.log("Matching group of character " + matches3);



//metacharacters -- \d-digits, \D-non-digits, \w-word characters, \W-non-word characters, \s-whitespace, \S-non-whitespace, \b-word boundary, \B-non-word boundary, \ddd-octal number, 
// /xhh-hexadecimal


let text3 = "Main aap sabhi ka swagat karta hu 100%";
let result1 = text3.match(/\d/); // it gives first match
let result2 = text3.match(/\d/g); // it gives all matches
let result3 = text3.match(/\w/g);
console.log("Matching group of digits " + result1); // it will return the matched string in the array. If not found it will return null. \d is for matching any digit
console.log("Matching group of digits " + result2); // it will return the matched string in the array. If not found it will return null. \d is for matching any digit
console.log("Matching group of word characters " + result3); // it will return the matched string in the array. If not found it will return null. \w is for matching any word character



// Regex Assertion - boundary matches and lookarounds

let text4 = "Hi, good evening perception";
console.log(text4.match(/^H/)); // start of string
console.log(text4.match(/n$/)); // end of string
console.log(text4.match(/\bgood\b/g)); // word boundary


// x(?=y) matches all x followed by y

let text5 = "100pt, 200pt, 430pt";
console.log(text5.match(/\d+(?=pt)/g)); // it will return all the digits followed by pt

// (?<=y)x matches all x preceded by y
console.log(text5.match(/(?<=pt)\d+/g)); // it will return all the digits preceded by pt


//() resembles the group or collection

let text6 = "Rambhau Gana ";
let regex8 = /(?<firstname>\w+)/;  // + single occurance * multiple references

let result4 = text6.match(regex8);
console.log(result4.groups.firstname);
//console.log(result4.groups.lastname);


