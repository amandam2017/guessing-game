const countryListElem = document.querySelector('.countryList');
const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
let sortedCoutries = countries.sort();

const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];
let sortedFlags = flags.sort();


const addbtnElem = document.querySelector('.addbtn');
const yourCountryElem = document.querySelector('.yourCountry');

let countriesToStore = []; 

if(localStorage['storedCountries']);{
    countriesToStore = JSON.parse(localStorage.getItem('storedCountries'));   
}

// instance for my factory function 
// let factFun = AddCountries(countriesToStore);

const list=(country) =>{
    let countryList = document.createElement('li');
    let content = document.createTextNode(country);

    countryList.appendChild(content);

    countryListElem.appendChild(countryList);
}

for (let i = 0; i < countries.length; i++) {
    const Flags = flags[i]
    const myCountries = countries[i];
    // used the template string to display both flags and countries
    let countriesAndFlags = `${Flags}  ${myCountries}`;

    list(countriesAndFlags);
}

const addNewCountry = () => {

    let addedCountry = yourCountryElem.value;

    if(addedCountry){
        addedCountry = addedCountry.charAt(0).toUpperCase() + addedCountry.slice(1);
        yourCountryElem.innerHTML = addedCountry;
    }

    list(addedCountry);

};

// set local storage
let onStorageCountry = countries;
localStorage.setItem('storedCountries', JSON.stringify(onStorageCountry));

addbtnElem.addEventListener('click', addNewCountry);