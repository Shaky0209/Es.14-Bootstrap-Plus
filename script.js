
const btnFlyClose = document.querySelector("#flyClose");
const btnFlyOpen = document.querySelector("#flyOpen");
const btnWeekClose = document.querySelector("#weekClose");
const btnWeekOpen = document.querySelector("#weekOpen");
const btnSummerClose = document.querySelector("#summerClose");
const btnSummerOpen = document.querySelector("#summerOpen");
const fly = document.querySelectorAll(".fly");
const week = document.querySelectorAll(".week");
const summer = document.querySelectorAll(".summer");
const sendContact = document.querySelector(".send-contact");
const titleModal = document.querySelector(".modal-title");
const msgNews = document.querySelector(".msgNews");
const inputCamp = document.querySelector(".yourMail");
const btnNews = document.querySelector(".news");
const btnClear = document.querySelector(".clear");
const btnRestore = document.querySelector(".openAll");


const flyClose = ()=>{
    fly.forEach(element => {
        element.classList.add("d-none");
    });
    btnFlyClose.classList.add("d-none");
    btnFlyOpen.classList.remove("d-none");

};

const flyOpen = ()=>{
    fly.forEach(element => {
        element.classList.remove("d-none");        
    });
    btnFlyClose.classList.remove("d-none");
    btnFlyOpen.classList.add("d-none");
    
};

const weekClose = ()=>{
    week.forEach(element => {
        element.classList.add("d-none");
    });
    btnWeekClose.classList.add("d-none");
    btnWeekOpen.classList.remove("d-none");
};

const weekOpen = ()=>{
    week.forEach(element => {
        element.classList.remove("d-none");        
    });
    btnWeekClose.classList.remove("d-none");
    btnWeekOpen.classList.add("d-none");
    
};

const summerClose = ()=>{
    summer.forEach(element => {
        element.classList.add("d-none");
    });
    btnSummerClose.classList.add("d-none");
    btnSummerOpen.classList.remove("d-none");
};

const summerOpen = ()=>{
    summer.forEach(element => {
        element.classList.remove("d-none");        
    });
    btnSummerClose.classList.remove("d-none");
    btnSummerOpen.classList.add("d-none");
    
};

const received = ()=>{
    titleModal.innerText = "Messaggio Ricevuto!";
    titleModal.style.backgroundColor = "lightgreen";
    msgNews.innerText = "Grazie per la tua iscrizione!";
    msgNews.style.fontWeight = "bold";
    msgNews.style.backgroundColor = "lightgreen";
    msgNews.style.textAlign = "center";
    inputCamp.value = "";
    inputCamp.classList.add("d-none");
    sendContact.classList.add("d-none");
}

const newsLetter =()=>{
    titleModal.innerText = "Iscriviti alla nostra Newsletter!!!";
    titleModal.style.backgroundColor = "white";
    msgNews.innerText = "Iscrivendoti alla nostra newsletter ti invieremo ogni settimana le offerte del momento, in questo modo potrai usufruire di vaucher per uno sconto e molti altri vantaggi!!!";
    msgNews.style.fontWeight = "normal";
    msgNews.style.backgroundColor = "white";
    msgNews.style.textAlign = "start";
    inputCamp.classList.remove("d-none");
    sendContact.classList.remove("d-none");
}

const clear = ()=>{
    flyClose();
    weekClose();
    summerClose();
    btnClear.classList.add("d-none");
    btnRestore.classList.remove("d-none");
}

const restore = ()=>{
    flyOpen();
    weekOpen();
    summerOpen();
    btnClear.classList.remove("d-none");
    btnRestore.classList.add("d-none");
}

btnFlyClose.addEventListener("click", ()=>{flyClose();});
btnFlyOpen.addEventListener("click", ()=>{flyOpen();});
btnWeekClose.addEventListener("click", ()=>{weekClose();});
btnWeekOpen.addEventListener("click", ()=>{weekOpen();});
btnSummerClose.addEventListener("click", ()=>{summerClose();});
btnSummerOpen.addEventListener("click", ()=>{summerOpen();});
sendContact.addEventListener("click", ()=>{received();});
btnNews.addEventListener("click", ()=>{newsLetter();});
btnClear.addEventListener("click", ()=>{clear();});
btnRestore.addEventListener("click", ()=>{restore();});