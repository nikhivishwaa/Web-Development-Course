console.log('welcome async await');

// async function getData() {
//     // this f() simulates the fetch data from server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data is recieved');
//             resolve("success");
//         }, 10000);
//     }
//     );
// }

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function main() {
    console.log('Starting to excecute');
    console.log('surrently on step 2');
    let data = await getData();  // waiting until promise not settled
    console.log(data);
    console.log('after the getData()');
    console.log('excecution completed');
}


main();

// fetch api returns promise it is an inbuilt module in js

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    x = await x.json();
    return x;
}