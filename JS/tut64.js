// including/importing modules

const fs = require('fs'); // including fs module
let text = fs.readFileSync("JS\\example.txt", "utf-8"); 
console.log(text);

text = text.replace("birthday", "Diwali");
console.log(text);

fs.writeFileSync("JS\\sample.txt", text); 
