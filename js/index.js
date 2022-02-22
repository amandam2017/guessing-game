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
        newGameAlertElem.innerHTML = '';

    }else if(enteredValues > randomNumber){
        tooHighElem.innerHTML = 'Your guess is too high';
        tooLowElem.innerHTML = '';
        successElem.innerHTML = '';
        newGameAlertElem.innerHTML = '';

    }else{
        successElem.innerHTML = `Correct, the secret number is ${enteredValues}!`;
        randomNumber = Math.ceil(Math.random()*100);
        tooHighElem.innerHTML = '';
        tooLowElem.innerHTML = '';
        newGameAlertElem.innerHTML = '';

        setTimeout(function(){
            newGameAlertElem.innerHTML = 'New game started!';
            successElem.innerHTML = '';
        },5000);

        // setTimeout(function(){
        //     newGameAlertElem.innerHTML = '';
        // },3000);

        setTimeout(myTime, 8000);
        

    }

    
    
}

function myTime(){
    newGameAlertElem.innerHTML = '';
    
}




// add event listener

guessBtnElem.addEventListener('click', guessBtnCheck)