const state = {
    view:{
        gameTimeView: document.querySelector("#time"),
        move: document.querySelector("#Score"),
    },
    values:{
        gameTime: 0,
        startGame: 0,
    }
}

const emojis = [
    "🐶",
    "🐶",
    "🐺",
    "🐺",
    "🐱",
    "🐱",
    "🐯",
    "🐯",
    "🦊",
    "🦊",
    "🦝",
    "🦝",
    "🐮",
    "🐮",
    "🐭",
    "🐭"
];
let openCards = [];


//embaralhador de do emojis
let randomEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

//verifica os carde
function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você Venceu !");
    }
}

function contDown() {
    state.values.gameTime++
    state.view.gameTimeView.textContent = state.values.gameTime;
}

//clicar em um carde
function handleClick(){
    if(openCards.length <2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
        state.values.startGame++;
        state.view.move.textContent = state.values.startGame;
    }
    if( state.values.startGame == 0 && openCards.length == 1){
        setInterval(contDown, 1000);
    }
}

//criando os cardes no DOM
for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = randomEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);

}

