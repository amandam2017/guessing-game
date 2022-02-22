// reference html elements
const guessedNumberElem = document.querySelector('.guessedNumber');
const guessBtnElem = document.querySelector('.guessBtn');
const messageElem = document.querySelector('.message');

// create a random number
let randomNumber = Math.ceil(Math.random()*100);

// function for logic
function guessBtnCheck(){
    // console.log('???'+guessedNumberElem.value) g = 3, r = 5
    const enteredValues = guessedNumberElem.value;
    console.log(guessedNumberElem,randomNumber);
    console.log({guessedNumberElem,randomNumber});

    if(enteredValues < randomNumber){
        messageElem.innerHTML = 'Your guess is too low';
        messageElem.getElementsByClassName.color = 'red';
    }else if(enteredValues > randomNumber){
        messageElem.innerHTML = 'Your guess is too high';
    }else{
        messageElem.innerHTML = `Correct, the secret number is ${enteredValues}`;
    }
}

// add event listener

guessBtnElem.addEventListener('click', guessBtnCheck)