
console.log("i am running");

let a = prompt("Enter first no.");
let b = prompt("Enter second no.");
let c;
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Error a gya jaanu");
}

else {
    c = parseInt(a) + parseInt(b);
}

// try catch example
// let d = 1;
// try {
//     console.log("the sum is:", c * d);
// } catch (error) {
//     // error objcet has property like errortype, errortext
//     console.log(error.name)
// }

// try catch finally example
function main() {
    try {
        console.log("the sum is:", c * d);
        return true;

    } catch (error) {
        console.log("error in defintition");
        return false;
    }
    finally {
        console.log("this will execute inside finally not matter return is executed");
    }
}

main();