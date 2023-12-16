function addNewCard() {
    let title = prompt("Enter Title of the Card : ");
    let channel = prompt("Enter Channel Name : ");
    let views = prompt("Enter Views as Interger : ");
    let duration = prompt("Enter Duration as HH:MM:SS : ");
    let howold = prompt("Enter How old is this in months: ");
    let thumbnail = prompt("Enter Thumbnail URL : ");

    let cont = document.querySelector('.container');
    let temp = views.toString();
    if(temp.length <=3) views = temp;
    else if(temp.length <=6 && temp.length>3) views = temp.slice(0,3) + "K";
    else if(temp.length <=9 && temp.length>6) views = temp.slice(0,3) + "M";
    else if(temp.length <=12 && temp.length>9) views = temp.slice(0,3) + "B";

    let newCard = `<div class="card">
    <div class="thumbnail"><img src="${thumbnail}" alt="thumbnail">
        <p class="duration">${duration}</p>
    </div>
    <div class="detail">
        <div class="title">${title[0].toUpperCase() + title.slice(1)}</div>
        <div class="info">
            <div class="channel-name">${channel}</div>
            <p class="dot"></p>
            <div class="views">${views} views</div>
            <p class="dot"></p>
            <div class="howold">${howold} months ago</div>
        </div>
    </div>
</div>`;
    cont.innerHTML += newCard;
}