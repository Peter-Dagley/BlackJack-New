'use strict'

// Elements of the page
const cardItem = document.querySelector("#card");
const startGameButton = document.querySelector("#game");
const drawCardButton = document.querySelector("#draw");
const foldHandButton = document.querySelector("#fold");
const restartGameButton = document.querySelector("#restart");
const sum = document.querySelector("#message");
const question = document.querySelector("#question");
const image = document.querySelector("#image")
const result1 = "Twenty-One!";
const result2 = "Bust! Try again.";
const result3 = "Draw another?";
const result4 = "Folded at";

// Random number generator
function randomCardNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}

// Additional Variables
let cardList = [];
let initialCard1 = randomCardNumber();
let initialCard2 = randomCardNumber();


// Add initial card values to table method
let addInitialCards = () => {
    cardList = [initialCard1, initialCard2];
    cardItem.innerHTML+=cardList.join(", ") + "<br>";
    console.log(cardList);
    sumOfCards();
}

// Add a card
let addACard = () => {
    cardList.push(randomCardNumber());
    cardItem.innerHTML+=cardList.join(", ") + "<br>";
    console.log(cardList);
    sumOfCards();
    if (sumOfCards() == 21) {
        console.log(result1);
        question.textContent=result1;
    } else if (sumOfCards() > 21) {
        console.log(result1);
        question.textContent=result2;
    } else {
        console.log(result3);
        question.textContent=result3;
    }
}

// Fold
let fold = () => {
    question.textContent=result4 + " " + sumOfCards() + "!";
}

// Sum of cardList
let sumOfCards = () => {
    let result = 0;
    for (let i = 0; i < cardList.length; i++) {
        result += cardList[i];
    }
    console.log(result)
    sum.textContent=result;
    return result;
}


// Flush the table of cards
let restartGame = () => {
    window.location.reload();
}

// Start game function
startGameButton.addEventListener("click", addInitialCards);

// Restart game
restartGameButton.addEventListener("click", restartGame);

// Draw a card
drawCardButton.addEventListener("click", addACard) 

// Fold hand
foldHandButton.addEventListener("click", fold)
