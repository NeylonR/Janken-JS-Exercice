//get pour le dom
const getButton = document.querySelector("button");
const getLeftJanken = document.getElementById("leftJanken");
const getRightJanken = document.getElementById("rightJanken");
const getLeftScore = document.getElementById("leftScore");
const getRightScore = document.getElementById("rightScore");

// variable changeante des options du janken
let jankenOption = null;
let jankenLeftOption = null;
let jankenRightOption = null;

// variable fixe pour les options du janken 
const jankenPierre = 1;
const jankenFeuille = 2;
const jankenCiseaux = 3;

// fonction pour avoir une option aleatoire entre 1 et 3
const getRandomJankenOption = function(){
    return jankenOption = 1 + Math.floor(Math.random() * 3 )
}

// fonction modification du dom pour l'img
const changeJankenDom = function(side, image,){
    side.style.background = image;
    side.style.backgroundSize = "contain";
    side.style.backgroundRepeat = "no-repeat";
}

// recuperer option du joueur de gauche + modif dom
const getLeftJankenOption = function(){
    getRandomJankenOption();
    if(jankenOption == 1){
        changeJankenDom(getLeftJanken, "url(../assets/img/stone.png");
        return jankenLeftOption = jankenOption;
    } else if(jankenOption == 2){
        changeJankenDom(getLeftJanken, "url(../assets/img/leaf.png");
        return jankenLeftOption = jankenOption;
    } else if(jankenOption == 3){
        changeJankenDom(getLeftJanken, "url(../assets/img/scissors.png");
        return jankenLeftOption = jankenOption;
    }
}

// recuperer option du joueur de droite + modif dom
const getRightJankenOption = function(){
    getRandomJankenOption();
    if(jankenOption == 1){
        changeJankenDom(getRightJanken, "url(../assets/img/stone.png");
        return jankenRightOption = jankenOption;
    } else if(jankenOption == 2){
        changeJankenDom(getRightJanken, "url(../assets/img/leaf.png");
        return jankenRightOption = jankenOption;
    } else if(jankenOption == 3){
        changeJankenDom(getRightJanken, "url(../assets/img/scissors.png");
        return jankenRightOption = jankenOption;
    }
}

// variable pour score à rentrer ensuite dans le dom
let scoreForLeft = 0;
let scoreForRight = 0;

// appel des deux fonctions pour l'option de chaque joueur, modification du score dans le dom.
getButton.addEventListener("click", function(){
    getLeftJankenOption();
    getRightJankenOption();

    if(jankenLeftOption == 1 && jankenRightOption == 3){
        scoreForLeft ++;
        getLeftScore.innerText = `Score : ${scoreForLeft}`; 
    } else if(jankenLeftOption == 1 && jankenRightOption == 2){
        scoreForRight ++;
        getRightScore.innerText = `Score : ${scoreForRight}`;
    } else if(jankenLeftOption == 2 && jankenRightOption == 1){
        scoreForLeft ++;
        getLeftScore.innerText = `Score: ${scoreForLeft}`;
    } else if(jankenLeftOption == 2 && jankenRightOption == 3){
        scoreForRight ++;
        getRightScore.innerText = `Score : ${scoreForRight}`;
    } else if(jankenLeftOption == 3 && jankenRightOption == 2){
        scoreForLeft ++;
        getLeftScore.innerText = `Score: ${scoreForLeft}`;
    } else if(jankenLeftOption == 3 && jankenRightOption == 1){
        scoreForRight ++;
        getRightScore.innerText = `Score : ${scoreForRight}`; 
    } else if (jankenLeftOption == jankenRightOption){
        scoreForLeft ++;
        scoreForRight ++;
        getLeftScore.innerText = `Score: ${scoreForLeft}`;
        getRightScore.innerText = `Score : ${scoreForRight}`;
    };
})