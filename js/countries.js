const countryListElem = document.querySelector('.countryList');

const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

// let sortedCoutries = countries.sort();
let sorted = flags.map((flag, index) => {

    // console.log(flag + ' ' + countries[index])
    return flag + ' ' + countries[index]
    
})

// console.log(sorted);

const addbtnElem = document.querySelector('.addbtn');
const yourCountryElem = document.querySelector('.yourCountry');
const yourFlagElem = document.querySelector('.yourFlag');

let localStorageCountries = []; 

if(localStorage['storedCountries']){
    localStorageCountries = JSON.parse(localStorage.getItem('storedCountries'));   
}
// factory instance
let factFun = AddCountries(localStorageCountries);

const list=(country) =>{
    let countryList = document.createElement('li');
    let content = document.createTextNode(country);

    countryList.appendChild(content);

    countryListElem.appendChild(countryList);
}

for (let i = 0; i < countries.length; i++) {
    const flagsEmojis = flags[i]
    const countryNames = countries[i];
    // used the template string to display both flags and countries
    let countriesAndEmojis = `${countryNames}  ${flagsEmojis}`;

    list(countriesAndEmojis);
}

const addNewCountry = () => {

    let addedCountries = yourCountryElem.value;
    let addedEmoji = yourFlagElem.value

    if(addedCountries && addedEmoji){
        factFun.setCountries(addedCountries);
       let displayCountry = factFun.addingFlagAndCountry(addedCountries);
       let displayFlags = factFun.addingFlags(addedEmoji);

        list(displayCountry + ' ' + displayFlags);


        // set local storage
let onStorageCountry = factFun.getCountries();
console.log(onStorageCountry);
onStorageCountry.push(displayCountry + ' ' + displayFlags);
localStorage.setItem('storedCountries', JSON.stringify(onStorageCountry));

    }

};

addbtnElem.addEventListener('click', addNewCountry);

// Struggle:
// to display the added country and flag to the local Storage it was only showing the current list of flags and countries
// I was missing: I was not pushing the added flag and registration to the localStorage