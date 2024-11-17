const emojis = [
    "😘",
    "😘",
    "😍",
    "😍",
    "🥰",
    "🥰",
    "😎",
    "😎",
    "😋",
    "😋",
    "😴",
    "😴",
    "😜",
    "😜",
    "🤑",
    "🤑"
];

let openCards = [];
let contagem = 0;

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2: -1))

for(let i=0; i< emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick (){
    if (openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        contagem++

        let elemento = document.getElementById("contagemPares");

        let textoAtual = elemento.textContent;

        if (textoAtual.length > 0) {
            let novoTexto = textoAtual.slice(0, -1) + contagem;
            elemento.textContent = novoTexto;
    }       
    } else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards= [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você venceu!")
    }
}