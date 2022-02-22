// reference html elements
const guessedNumberElem = document.querySelector('.guessedNumber');
const guessBtnElem = document.querySelector('.guessBtn');
const tooLowElem = document.querySelector('.tooLow');
const tooHighElem = document.querySelector('.tooHigh');
const successElem = document.querySelector('.success');
const newGameAlertElem = document.querySelector('.newGameAlert')


// create a random number
let randomNumber = Math.ceil(Math.random()*100);

// function for logic
function guessBtnCheck(){
    const enteredValues = guessedNumberElem.value;
    console.log(guessedNumberElem,randomNumber);
    console.log({guessedNumberElem,randomNumber});

    if(enteredValues < randomNumber){
        tooLowElem.innerHTML = 'Your guess is too low';
        tooHighElem.innerHTML = '';
        successElem.innerHTML = '';

    }else if(enteredValues > randomNumber){
        tooHighElem.innerHTML = 'Your guess is too high';
        tooLowElem.innerHTML = '';
        successElem.innerHTML = '';
    }else{
        successElem.innerHTML = `Correct, the secret number is ${enteredValues}!`;
        randomNumber = Math.ceil(Math.random()*100);
        tooHighElem.innerHTML = '';
        tooLowElem.innerHTML = '';
    }

    setTimeout (function(){
        tooLowElem.innerHTML = '';
        tooHighElem.innerHTML = '';
        successElem.innerHTML = ``;
    },2000)
}

// add event listener

guessBtnElem.addEventListener('click', guessBtnCheck)