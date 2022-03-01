const countryListElem = document.querySelector('.countryList');

const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

// let sortedCoutries = countries.sort();
let sorted = flags.map((flag, index) => {

    // console.log(flag + ' ' + countries[index])
    return flag + ' ' + countries[index]
    
})

// REFERENCE ELEMENTS
const addbtnElem = document.querySelector('.addbtn');
const yourCountryElem = document.querySelector('.yourCountry');
const yourFlagElem = document.querySelector('.yourFlag');
const sortingCountriesElem = document.getElementById('sortingCountries');
const errorsElem = document.querySelector('.errors');

let localStorageCountries = []; 

if(localStorage['storedCountries']){
    localStorageCountries = JSON.parse(localStorage.getItem('storedCountries'));   
}
// factory instance
let factFun = AddCountries(localStorageCountries);

const list=(country) =>{
    // console.log('cons country'+country)
    let countryList = document.createElement('li');
    let content = document.createTextNode(country);

    countryList.appendChild(content);

    countryListElem.appendChild(countryList);
}

for (let i = 0; i < countries.length; i++) {
    const flagsEmojis = flags[i];
    const countryNames = countries[i];
    // used the template string to display both flags and countries
    let countriesAndEmojis = `${countryNames}  ${flagsEmojis}`;

    list(countriesAndEmojis);
}

const regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
// const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];
console.log(flags.length);
console.log(regex);
console.log(regex.test(flags));
// console.log(flags.match(regex));

const addNewCountry = () => {

    let addedCountries = yourCountryElem.value;
    let addedEmoji = yourFlagElem.value

    if(addedCountries && addedEmoji){
       if(regex.test(addedEmoji)){
           if(!localStorageCountries.includes(addedEmoji)){
            factFun.setCountries(addedCountries);
            let displayCountry = factFun.addingCountry(addedCountries);
            let displayFlags = factFun.addingFlags(addedEmoji);
     
             list(displayCountry + ' ' + displayFlags);
     
         // set local storage
         let onStorageCountry = factFun.getCountries();
         console.log(onStorageCountry.sort());
         onStorageCountry.push(displayFlags + ' ' + displayCountry);
         localStorage.setItem('storedCountries', JSON.stringify(onStorageCountry));

           }

       }else{
        errorsElem.innerHTML = 'Please insert flag emoji';
       }

    }else{
        errorsElem.innerHTML = 'Please enter a country and paste flag imoji';

    }

};

const sorting = () =>{

    let ascOrder = sortingCountriesElem.value
    let discOrder = sortingCountriesElem.value
    // let dscOrder = document.querySelector("input[name ='descending']:checked");
    // console.log(ascOrder, selectedOrder.target.value);
    if('ascending' === ascOrder){
        let selectedAscOrder = factFun.sortingAsc();
        console.log(selectedAscOrder)
        list(selectedAscOrder);
        
    } else if('descending' === discOrder){
        let selectedDescOrder = factFun.sortingDesc();
        console.log(selectedDescOrder)
        list(selectedDescOrder);
    }
}

// const onLoad

addbtnElem.addEventListener('click', addNewCountry);
sortingCountriesElem.addEventListener('change', sorting);

// Struggled:
// to display the added country and flag to the local Storage it was only showing the current list of flags and countries
// I was missing: I was not pushing the added flag and registration to the localStorage

// SORTING IN ASCENDING AND DESCENDING ORDER
// in html: create a drop down --select option
// in js: reference the dropdown option by a class
// create a function that will sort the countries in asc and dsc order by returning the the order of the selected option. 