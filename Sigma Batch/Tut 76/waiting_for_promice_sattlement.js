console.log('welcome async await');

function getData() {
    // this f() simulates the fetch data from server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data is recieved');
            resolve("success");
        }, 10000);
    }
    );
}

console.log('Starting to excecute');
console.log('surrently on step 2');
let data = getData();
console.log(data);
data.then((res) => {
    console.log('Status : ',res);
    console.log('after the getData()');
    console.log('excecution completed');
});

//  without waiting for data
// console.log('Starting to excecute');
// console.log('surrently on step 2');
// let data = getData();
// console.log(data);
// console.log('after the getData()');
// console.log('excecution completed');