0 =="";  // true both convert to 0
0 == "0"; // true both convert to 0
0 == false; // true both convert to 0
null == undefined; // true both convert to false
" \t\n " == 0; // true both convert to 0

null == 0; // false null is only equal to undefined
null == ""; // false null is only equal to undefined
null == false; // false null is only equal to undefined
undefined == 0; // false undefined is only equal to null
undefined == ""; // false undefined is only equal to null
undefined == false; // false undefined is only equal to null
NaN == NaN; // false NaN is not equal to anything, including itself


console.log("" === false); // false different types
console.log(""== false); // true both convert to 0
console.log(null == undefined); // true both convert to false
console.log(null === undefined); // false different types
console.log(0 === false); // false different types
console.log(0 == false); // true both convert to 0


console.log("0" === false); // false different types
console.log("0" == false); // true both convert to 0

//console.log("I tried manual way to push my code to github on 08-03-2023, now I will go with AI")