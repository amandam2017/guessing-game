const countryListElem = document.querySelector('.countryList');
const showFlagsElem = document.querySelector('.showFlags');

const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

// let sortedCoutries = countries.sort();
let sorted = countries.map((country, i) => {

    // console.log(flag + ' ' + countries[i])
    return country + ' ' + flags[i]

});

// console.log(sorted);

// REFERENCE ELEMENTS
const addbtnElem = document.querySelector('.addbtn');
const yourCountryElem = document.querySelector('.yourCountry');
const yourFlagElem = document.querySelector('.yourFlag');
const sortingCountriesElem = document.getElementById('sortingCountries');
const errorsElem = document.querySelector('.errors');
const filteredListElem = document.getElementById('filteredList');
let searchInputElem = document.getElementById('search');

let localStorageCountries = [];

if (localStorage['storedCountries']) {
    localStorageCountries = JSON.parse(localStorage.getItem('storedCountries'));
    // the below line is to make the the added countries to not disappear on windowload  
    sorted = localStorageCountries;
}
// factory instance
let factFun = AddCountries(localStorageCountries);
const list = (country) => {
    // console.log('const country'+country);
    let countryList = document.createElement('li');
    let content = document.createTextNode(country);

    countryList.appendChild(content);

    countryListElem.appendChild(countryList);
    // showFlagsElem.appendChild(countryList);

}

const flagsList = (flags) => {
    let flagList = document.createElement('li');
    let content = document.createTextNode(flags);

    flagList.appendChild(content);
    showFlagsElem.appendChild(flagList);

}


for (var i = 0; i < sorted.length; i++) {
    const countryFlag = sorted[i];
    list(countryFlag);
}

const regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;

const addNewCountry = () => {

    let addedCountries = yourCountryElem.value;
    let addedEmoji = yourFlagElem.value

    if (addedCountries && addedEmoji) {
        if (regex.test(addedEmoji)) {
            addedCountries = addedCountries.charAt(0).toUpperCase() + addedCountries.slice(1);
            
            if (!sorted.includes(addedCountries + ' ' + addedEmoji)) {

                list(addedCountries + ' ' + addedEmoji);

                // set local storage
                flags.push(addedEmoji);
                countries.push(addedCountries);
                sorted.push(addedCountries + ' ' + addedEmoji)
                localStorage.setItem('storedCountries', JSON.stringify(sorted));

            }
            else {
                errorsElem.innerHTML = 'Already exists' // factFun.errors(addedCountries, addedEmoji);
            }

        } else {
            errorsElem.innerHTML = factFun.testingRegex();
        }

    } else {
        errorsElem.innerHTML = factFun.errors();

    }

};


const sorting = () => {
    countryListElem.innerHTML = ''
    let ascOrder = sortingCountriesElem.value
    let discOrder = sortingCountriesElem.value

    if ('ascending' === ascOrder) {
        let selectedAscOrder = factFun.sortingAsc();
        selectedAscOrder.forEach(country => {
            list(country);
        })


    } else if ('descending' === discOrder) {
        let selectedDescOrder = factFun.sortingDesc();
        selectedDescOrder.forEach(country => {
            list(country);
        })
    }
}


const filterFun = () => {

    countryListElem.innerHTML = ''
    var searchInput = searchInputElem.value;
    searchInput = searchInput.charAt(0).toUpperCase() + searchInput.slice(1)

    for (let i = 0; i < sorted.length; i++) {
        const countries = sorted[i];
        const countryFlag = `${countries}`
        console.log(countryFlag)

        if (countryFlag.includes(searchInput)) {
            console.log(countryFlag.includes(searchInput))
            // countryListElem.innerHTML = countryFlag;
            list(countryFlag)
        }

    }
}

addbtnElem.addEventListener('click', addNewCountry);
sortingCountriesElem.addEventListener('change', sorting);
sortingCountriesElem.addEventListener('keyup', filterFun);



// Struggled:
// to display the added country and flag to the local Storage it was only showing the current list of flags and countries
// I was missing: I was not pushing the added flag and registration to the localStorage

// SORTING IN ASCENDING AND DESCENDING ORDER
// in html: create a drop down --select option
// in js: reference the dropdown option by a class
// create a function that will sort the countries in asc and dsc order by returning the the order of the selected option. 