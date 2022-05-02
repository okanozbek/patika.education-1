const newName     = prompt("Adınız Nedir ?");
const logoArea    = document.getElementById('logo');
const logoSrc     = "https://cdn.sanity.io/images/9kdepi1d/production/65c832d202a503b15d99e628f4313782f3ef50db-300x62.png"
const titleArea   = document.getElementById('welcomeTitle');
const messageArea = document.getElementById('welcomeMessage');
const timeArea    = document.getElementById('myClock');

function showTime() {
    const date  = new Date();
    let day     = date.getDay();
    let hours   = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    switch(day) {
        case 0:
            day = "Pazar";
            break;
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
    }

timeArea.innerHTML = `
    <div>${hours < 10 ? '0' + hours : hours}</div>
    <div>${minutes < 10 ? '0' + minutes : minutes}</div>
    <div>${seconds < 10 ? '0' + seconds : seconds}</div>
    <div>${day}</div>
`
}

titleArea.innerHTML = `
    Merhaba, <strong><span>${newName}</span></strong>! Hoş geldin!
`

messageArea.innerHTML = `
    tarihinde
    <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın
    Javascript bölümü 1. Ödevindesiniz.
`

logoArea.innerHTML = `
    <img
        src="${logoSrc}"
        alt=""
    />
`


setInterval(showTime,1000);
