const countryListElem = document.querySelector('.countryList');
const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
// let sortedCoutries = countries.sort();
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];
// let sortedFlags = flags.sort();


const addbtnElem = document.querySelector('.addbtn');
const yourCountryElem = document.querySelector('.yourCountry');
const yourFlagElem = document.querySelector('.yourFlag');

let localSotageCountries = []; 

if(localStorage['stotedFruits']);{
    localSotageCountries = JSON.parse(localStorage.getItem('stotedFruits'));   
}

// factory instance
let factFun = AddCountries(localSotageCountries);

const list=(country) =>{
    let countryList = document.createElement('li');
    let content = document.createTextNode(country);

    countryList.appendChild(content);

    countryListElem.appendChild(countryList);
}

for (let i = 0; i < fruitNames.length; i++) {
    const fruitEmoji = fruits[i]
    const myFruitNames = fruitNames[i];
    // used the template string to display both flags and countries
    let fruitsAndEmojis = `${fruitEmoji}  ${myFruitNames}`;

    list(fruitsAndEmojis);
}

const addNewCountry = () => {

    let addedFruit = yourCountryElem.value;
    // let addedEmoji = yourFlagElem.value

    if(addedFruit){
        factFun.setCountries(addedFruit);
        // addedFruit = addedFruit.charAt(0).toUpperCase() + addedFruit.slice(1);
        // let display = countryListElem.innerHTML;
       let display = factFun.addingFlagAndCountry(addedFruit);

        list(display);

    }
 

// set local storage
let onStorageCountry = factFun.getCountries();
console.log(onStorageCountry);
localStorage.setItem('stotedFruits', JSON.stringify(onStorageCountry));

};

addbtnElem.addEventListener('click', addNewCountry);