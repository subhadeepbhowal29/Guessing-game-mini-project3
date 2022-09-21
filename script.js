//initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

//finding elements
const cardBody = document.querySelector(".card-body");
const form = document.querySelector("form");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

form.addEventListener("submit", function(){
    event.preventDefault();
    attempts++;
    if(attempts == 5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }if(attempts < 6){
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts-attempts}`;
    }
    guessingNumber.value = "";
});

function checkResult(guessingNumber){
    const randomNumber = getRandomNumber(5);
    if (guessingNumber == randomNumber){
        resultText.innerHTML = `You have won.`;
        totalWons++;
    }else{
        resultText.innerHTML = `You have lost. Random Number was ${randomNumber}`;
        totalLosts++;
    }
    lostWonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totalLosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) +1;
}