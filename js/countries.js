const countryListElem = document.querySelector('.countryList');
const showFlagsElem = document.querySelector('.showFlags');

const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

const flagsToChoseFrom = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭", "🇦🇩", "🇦🇴", "🇧🇬"];
// let sortedCoutries = countries.sort();
let sorted = countries.map((country, i) => {

    // console.log(flag + ' ' + countries[i])
    return country + ' ' + flags[i]
    
});

console.log(sorted);

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
    // console.log('const country'+country);
    let countryList = document.createElement('li');
    let content = document.createTextNode(country);

    countryList.appendChild(content);

    countryListElem.appendChild(countryList);
    // showFlagsElem.appendChild(countryList);

}

const flagsList=(flags) =>{
    // console.log('cons country'+country)
    let flagList = document.createElement('li');
    let content = document.createTextNode(flags);

    flagList.appendChild(content);

    // countryListElem.appendChild(countryList);
    showFlagsElem.appendChild(flagList);

}

for (let i = 0; i < flagsToChoseFrom.length; i++) {
    const list = flagsToChoseFrom[i];
    flagsList(list);
    
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
    // I first cleared the existing list
    // Then called the sorting function from the factory function which was bringing the array of objects inside the li 
    // which was not what I needed because I need each country+flag to be in an li 
    // So I used a forEach loop to loop through the list and callback a function for each element in an array.
    // So basically the forEach loop The function will be executed for every single element of the array. It must take at least one parameter which represents the elements of an array:
    // more about forEach here: https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/
    countryListElem.innerHTML = ''
    let ascOrder = sortingCountriesElem.value
    let discOrder = sortingCountriesElem.value
    // console.log(ascOrder, selectedOrder.target.value);
    if('ascending' === ascOrder){
        let selectedAscOrder = factFun.sortingAsc();
        selectedAscOrder.forEach(country => {
            list(country);
        })
        // list(selectedAscOrder);

        
    } else if('descending' === discOrder){
        let selectedDescOrder = factFun.sortingDesc();
        selectedDescOrder.forEach(country => {
            list(country);
        })
    }
}


const filterFun = () =>{

    countryListElem.innerHTML = ''
    var searchInput = searchInputElem.value;
    searchInput = searchInput.charAt(0).toUpperCase() + searchInput.slice(1)
        
    for (let i = 0; i < sorted.length; i++) {
        const countries = sorted[i];
        const countryFlag =   `${countries}`
        console.log(countryFlag)

        if(countryFlag.includes(searchInput)){
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