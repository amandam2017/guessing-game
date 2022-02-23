const countryListElem = document.querySelector('.countryList');

const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

//use map method to extract a list of countries
// countryListElem.innerHTML = countries.map(function(myCountries){
//     console.log(`countries: ${myCountries}`);
//     return  `countries: ${myCountries}`;
// });

//this function creates and element li
// step2:
const list=(country) =>{
    let countryList = document.createElement('li');
    let content = document.createTextNode(country);

    countryList.appendChild(content);
    console.log('which content'+ countryList);

    countryListElem.appendChild(countryList);
}

for (let i = 0; i < countries.length; i++) {
    const Flags = flags[i]

    const myCountries = countries[i];
    let countriesAndFlags = `${Flags}  ${myCountries}`;

    list(countriesAndFlags);
}