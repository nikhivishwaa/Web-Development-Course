console.log('i am hecker');

var hText = ["Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up",];
var currentLine = 0;
const changedots = (dots) => {
    if (dots.length == 1) return '..';
    else if (dots.length == 2) return '...';
    else if (dots.length == 3) return '.';
}
const dotsblink = () => {
    let x = document.querySelector('#dot' + currentLine);
    x.innerHTML = changedots(x.innerHTML);
}

async function nextLine() {
    let c = Math.min(Math.random(), 0.700);
    c = Math.floor(10000 * c);
    return new Promise((resolve, reject) => {
        let dots = setInterval(() => {
            dotsblink();
        }, 400);
        if (currentLine == 0) c += 2000;
        setTimeout(() => {
            let nextshock = `<div class="lines"><h4>${currentLine + 1} &nbsp;   ${hText[currentLine]}</h4><p class="dots" id="dot${currentLine + 1}">.</p></div>`;
            document.getElementById('hacker-terminal').innerHTML += nextshock;
            clearInterval(dots);
            currentLine++;
            resolve('success');
            console.log(c);
        }, c);
    });
}

async function inputClicked() {
    let form = document.getElementById("start-hacking");
    let terminal = document.getElementById("hacker-terminal");
    return new Promise((resolve, reject) => {
        addEventListener('click', () => {
            form.style.display = 'none';
            terminal.style.display = 'flex';
            resolve('Hacking Started')
        })
    });
}

async function hacked() {
    for (let x = 0; x < hText.length; x++) {
        let c = await nextLine();
        console.log(c);
    }
    return 0;
}

async function hacking() {
    let start = await inputClicked();
    console.log(start);
    start = await hacked();
}

hacking();