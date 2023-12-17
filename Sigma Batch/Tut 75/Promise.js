console.log('i am running');

// Promise of code execution

// resolve | reject

// then | catch

const prom1 = new Promise((resolve, reject)=>{
    let x = Math.random()
    if(x<0.5){
        reject("rejected => your chance is less than 50%");
    }
    else{
        setTimeout(()=>{
            console.log("i am side promise");
            resolve('resolved => your chance is > 50%');
        })
    }
}, 3000);

// then methon when promise resolved and catch method when promise reject

prom1.then((a)=>{
    console.log(a);
}).catch((e)=>{
    console.log(e);
})