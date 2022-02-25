const countryListElem = document.querySelector('.countryList');
const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
// let sortedCoutries = countries.sort();
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];
// let sortedFlags = flags.sort();


const addbtnElem = document.querySelector('.addbtn');
const yourCountryElem = document.querySelector('.yourCountry');
const yourFlagElem = document.querySelector('.yourFlag');

let localSotageCountries = []; 

if(localStorage['storedCountries']);{
    localSotageCountries = JSON.parse(localStorage.getItem('storedCountries'));   
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

    let addedCountry = yourCountryElem.value;
    // let addedFlag = yourFlagElem.value

    if(addedCountry){
        factFun.setCountries(addedCountry);
        // addedCountry = addedCountry.charAt(0).toUpperCase() + addedCountry.slice(1);
        countryListElem.innerHTML = factFun.addingFlagAndCountry(addedCountry);
    }
 
    list(countryListElem.innerHTML);

// set local storage
let onStorageCountry = factFun.getCountries();
console.log(onStorageCountry);
localStorage.setItem('storedCountries', JSON.stringify(onStorageCountry));

};

addbtnElem.addEventListener('click', addNewCountry);