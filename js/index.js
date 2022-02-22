// reference html elements
const guessedNumberElem = document.querySelector('.guessedNumber');
const guessBtnElem = document.querySelector('.guessBtn');
const tooLowElem = document.querySelector('.tooLow');
const tooHighElem = document.querySelector('.tooHigh');
const successElem = document.querySelector('.success');


// create a random number
let randomNumber = Math.ceil(Math.random()*100);

// function for logic
function guessBtnCheck(){
    // console.log('???'+guessedNumberElem.value) g = 3, r = 5
    const enteredValues = guessedNumberElem.value;
    console.log(guessedNumberElem,randomNumber);
    console.log({guessedNumberElem,randomNumber});

    if(enteredValues < randomNumber){
        tooLowElem.innerHTML = 'Your guess is too low';
        tooHighElem.innerHTML = '';
        successElem.innerHTML = '';
        // messageElem.getElementsByClassName.color = 'red';
    }else if(enteredValues > randomNumber){
        tooHighElem.innerHTML = 'Your guess is too high';
        tooLowElem.innerHTML = '';
        successElem.innerHTML = '';
    }else{
        successElem.innerHTML = `Correct, the secret number is ${enteredValues}!`;
        tooHighElem.innerHTML = '';
        tooLowElem.innerHTML = '';
    }
}

// add event listener

guessBtnElem.addEventListener('click', guessBtnCheck)