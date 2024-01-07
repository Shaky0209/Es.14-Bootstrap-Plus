
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
const backMsg = document.querySelector(".backMsg");
const backTitle = document.querySelector(".backTitle");
const footMsg = document.querySelector(".footMsg");
const allTravels = document.querySelectorAll(".card");
const btnCounter = document.querySelector(".btnCounter");
const counterMsg = document.querySelector(".countMsg");
const btnRequest = document.querySelector(".sendRequest");
const reqTitle = document.querySelector(".reqTitle");
const btnContact = document.querySelector(".btnContact");
const modFormContact = document.querySelector(".modFormContact");
const reqHead = document.querySelector(".reqHead");
const reqMod = document.querySelector(".reqMod");
const reqFoot = document.querySelector(".reqFoot");

const btnCheck = ()=>{

    if(btnFlyOpen.value === "true" && btnWeekOpen.value === "true" && btnSummerOpen.value === "true"){
        btnRestore.classList.remove("d-none");
        btnClear.classList.add("d-none");
    }else{
        btnRestore.classList.add("d-none");
        btnClear.classList.remove("d-none");
    }
}

const flyClose = ()=>{
    fly.forEach(element => {
        element.classList.add("d-none");
    });
    btnFlyClose.classList.add("d-none");
    btnFlyOpen.classList.remove("d-none");
    btnFlyOpen.value = "true";
    btnCheck();
};

const flyOpen = ()=>{
    fly.forEach(element => {
        element.classList.remove("d-none");        
    });
    btnFlyClose.classList.remove("d-none");
    btnFlyOpen.classList.add("d-none");
    btnFlyOpen.value = "false";
    btnCheck();        
};

const weekClose = ()=>{
    week.forEach(element => {
        element.classList.add("d-none");
    });
    btnWeekClose.classList.add("d-none");
    btnWeekOpen.classList.remove("d-none");
    btnWeekOpen.value = "true";
    btnCheck();
};

const weekOpen = ()=>{
    week.forEach(element => {
        element.classList.remove("d-none");        
    });
    btnWeekClose.classList.remove("d-none");
    btnWeekOpen.classList.add("d-none");
    btnWeekOpen.value = "false";
    btnCheck();
};

const summerClose = ()=>{
    summer.forEach(element => {
        element.classList.add("d-none");
    });
    btnSummerClose.classList.add("d-none");
    btnSummerOpen.classList.remove("d-none");
    btnSummerOpen.value = "true";
    btnCheck();
};

const summerOpen = ()=>{
    summer.forEach(element => {
        element.classList.remove("d-none");        
    });
    btnSummerClose.classList.remove("d-none");
    btnSummerOpen.classList.add("d-none");
    btnSummerOpen.value = "false";
    btnCheck();
};

const received = ()=>{
    titleModal.innerText = "Messaggio Ricevuto!";
    msgNews.innerText = "Grazie per la tua iscrizione!";
    msgNews.style.fontWeight = "bold";
    msgNews.style.fontSize = "24px";
    msgNews.style.textAlign = "center";
    backMsg.style.backgroundColor = "lightgreen";
    backTitle.style.backgroundColor = "lightgreen";
    footMsg.style.backgroundColor = "lightgreen";
    inputCamp.value = "";
    inputCamp.classList.add("d-none");
    sendContact.classList.add("d-none");
}

const newsLetter =()=>{
    titleModal.innerText = "Iscriviti alla nostra Newsletter!!!";
    msgNews.innerText = "Iscrivendoti alla nostra newsletter ti invieremo ogni settimana le offerte del momento, in questo modo potrai usufruire di vaucher per uno sconto e molti altri vantaggi!!!";
    msgNews.style.fontWeight = "normal";
    msgNews.style.fontSize = "16px";
    backMsg.style.backgroundColor = "white";
    backTitle.style.backgroundColor = "white";
    footMsg.style.backgroundColor = "white";
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

const countMsg = ()=>{
    counterMsg.innerText = "In questa pagina puoi trovare " + allTravels.length + " offerte di viaggio!";
}

const sendRequest = ()=>{
    modFormContact.innerHTML = "";
    reqTitle.innerText = "Richiesta inviata!!!";
    let answer = document.createElement("p");
    answer.innerText = "Abbiamo ricevuto la tua richiesta, ti contatteremo appena possibile.";
    modFormContact.appendChild(answer);
    reqHead.style.backgroundColor = "lightgreen";
    reqMod.style.backgroundColor = "lightgreen";
    reqFoot.style.backgroundColor = "lightgreen";
    btnRequest.classList.add("d-none");
}

const addForm = ()=>{
    modFormContact.innerHTML = "";
    reqHead.style.backgroundColor = "white";
    reqMod.style.backgroundColor = "white";
    reqFoot.style.backgroundColor = "white";
    reqTitle.innerText = "Inviaci la tua Richiesta!!!";
    btnRequest.classList.remove("d-none");
    let inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("class", "mb-2");
    inputName.setAttribute("placeholder", "Inserisci il tuo nome");
    let inputSurname = document.createElement("input");
    inputSurname.setAttribute("type", "text");
    inputSurname.setAttribute("class", "mb-2");
    inputSurname.setAttribute("placeholder", "Inserisci il tuo cognome");
    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("class", "mb-2");
    inputEmail.setAttribute("placeholder", "Inserisci la tua e-mail");
    let inputText = document.createElement("textarea");
    inputText.setAttribute("placeholder", "Inserisci la tua richiesta");
    inputText.setAttribute("cols", "30");
    inputText.setAttribute("rows", "10");
    modFormContact.appendChild(inputName);
    modFormContact.appendChild(inputSurname);
    modFormContact.appendChild(inputEmail);
    modFormContact.appendChild(inputText);

}


btnFlyClose.addEventListener("click", flyClose);
btnFlyOpen.addEventListener("click", flyOpen);
btnWeekClose.addEventListener("click", weekClose);
btnWeekOpen.addEventListener("click", weekOpen);
btnSummerClose.addEventListener("click", summerClose);
btnSummerOpen.addEventListener("click", summerOpen);
sendContact.addEventListener("click", received);
btnNews.addEventListener("click", newsLetter);
btnClear.addEventListener("click", clear);
btnRestore.addEventListener("click", restore);
btnCounter.addEventListener("click", countMsg);
btnRequest.addEventListener("click", sendRequest);
btnContact.addEventListener("click", addForm);