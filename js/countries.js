const countryListElem = document.querySelector('.countryList');

const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

// let sortedCoutries = countries.sort();
let sorted = countries.map((country, i) => {

    // console.log(flag + ' ' + countries[i])
    return country + ' ' + flags[i]
    
});

// console.log(sorted)

// REFERENCE ELEMENTS
const addbtnElem = document.querySelector('.addbtn');
const yourCountryElem = document.querySelector('.yourCountry');
const yourFlagElem = document.querySelector('.yourFlag');
const sortingCountriesElem = document.getElementById('sortingCountries');
const errorsElem = document.querySelector('.errors');
const filteredListElem = document.getElementById('filteredList');
let searchInputElem =  document.getElementById('search');

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

for (let i = 0; i < sorted.length; i++) {
    const countryFlag = sorted[i];
    const countryFlagList = `${countryFlag}`
    list(countryFlagList);
    
}


    

const regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;

const addNewCountry = () => {

    let addedCountries = yourCountryElem.value;
    let addedEmoji = yourFlagElem.value

    if(addedCountries && addedEmoji){
       if(regex.test(addedEmoji)){
           if(!localStorageCountries.includes(addedCountries) || !localStorageCountries.includes(addedEmoji)){
            factFun.setCountries(addedCountries);
            let displayCountry = factFun.addingCountry(addedCountries);
            let displayFlags = factFun.addingFlags(addedEmoji);
     
             list(displayCountry + ' ' + displayFlags);
     
         // set local storage
         let onStorageCountry = factFun.getCountries();
         console.log(onStorageCountry);
         onStorageCountry.push(displayCountry + ' ' + displayFlags);
         localStorage.setItem('storedCountries', JSON.stringify(onStorageCountry));

           }else{
                errorsElem.innerHTML = 'Country has already exist in the list!';
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


const filterFun = () =>{

    var searchInput = searchInputElem.value;
        
    for (let i = 0; i < sorted.length; i++) {
        const countries = sorted[i];
        const countryFlag =   `${countries}`
        if(countryFlag.includes(searchInput)){
            console.log(countryFlag.includes(searchInput))
            // countryListElem.innerHTML = countryFlag;
        }
        
    }
        

}

// output
let filtersorted = sorted.filter(filterFun);

console.log(filtersorted);

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