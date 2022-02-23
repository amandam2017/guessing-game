const countryListElem = document.querySelector('.countryList');
const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

const addbtnElem = document.querySelector('.addbtn');
const yourCountryElem = document.querySelector('.yourCountry');


//use map method to extract a list of countries
// countryListElem.innerHTML = countries.map(function(myCountries){
//     console.log(`countries: ${myCountries}`);
//     return  `countries: ${myCountries}`;
// });

//this function creates and element li
//step2: get the content
//append the created li so that you can be able to display each country in an li
// appendChild to display all countries in each li inside ul which is represented by countryListElem here
const list=(country) =>{
    let countryList = document.createElement('li');
    let content = document.createTextNode(country);

    countryList.appendChild(content);
    countryListElem.appendChild(countryList);
}

for (let i = 0; i < countries.length; i++) {
    const Flags = flags[i]

    const myCountries = countries[i];
    let countriesAndFlags = `${Flags}  ${myCountries}`;

    list(countriesAndFlags);
}

//  Last section add ability to add more countries

//  add input for user to enter a country
//  add button to add a country

// JS
// reference input filed
// reference button
// create a function to get the value of the input field
// add event lister in a button to do something on the btn click

const addNewCountry = () => {
    let countryList = document.createElement('li');

    let addedCountry = yourCountryElem.value;

    countryList.innerHTML = addedCountry;


}

addbtnElem.addEventListener('click', addNewCountry);