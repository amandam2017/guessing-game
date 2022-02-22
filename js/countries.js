const countryListElem = document.querySelector('.countryList');

const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

//use map method to extract a list of flags
const Flags = countries.map(function(chosedCountry){
    console.log('country:'+ chosedCountry)
    countryListElem.innerHTML =  chosedCountry;
})
