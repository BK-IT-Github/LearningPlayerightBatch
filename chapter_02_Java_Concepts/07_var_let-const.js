// var, let, const in JS
// var is a function scoped
// let is a block scoped
// const is a block scoped

// var
var x = 10;
console.log(x);

// let
let y = 20;
console.log(y);

// const
const z = 30;
console.log(z);

// Definition of Function
function test() {
    var x = 100;// Local scope
    //let y = 200;// Local scope
    const z = 300;// Local scope
    console.log(x);// manupulaton happened within the function
    console.log(y);// manupulaton happened within the function
    console.log(z);// manupulaton happened within the function
    if (true) {
        var x = 1;
        let y = 2;
        const z = 3;
        console.log(x);// manupulaton happened within the block
        console.log(y);// manupulaton happened within the block
        console.log(z);// manupulaton happened within the block
    }
    console.log(x);// Keep latest assigned value as this is var
    console.log(y);// will not keep latest assigned value as this is let (print function scope)
    console.log(z);// will not keep latest assigned value as this is const (print function scope)
}

// Calling of Function
test();
console.log(x);// will not keep latest assigned value as this is var (global scope)
console.log(y);// will not keep latest assigned value as this is let (global scope)
console.log(z);// will not keep latest assigned value as this is const (global scope)
