const AddCountries = (localStorageCountries) =>{
    const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
    const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];
    const regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
    console.log(localStorageCountries);
    let sorted = countries.map((country, index) => {

        // console.log(flag + ' ' + countries[index])
        return country + ' ' + flags[index]
        
    });
    // console.log(sorted);

    let MyCoutries = countries || [];
    let myFlags = flags || [];

    const setCountries = (addCountry, addFlags) =>{
        if(addCountry && addFlags){
            addCountry = addCountry.charAt(0).toUpperCase() + addCountry.slice(1);
            // if(!MyCoutries.includes(addCountry)){
                MyCoutries.push(addCountry + ' ');
                myFlags.push(addFlags);
            // }
        }
        
        return ;
    }
    
    const getCountries = () => {
        var arrayOfCoutries = []
        for (let i = 0; i < myFlags.length; i++) {
            const theFlags = myFlags[i];
            const theCountries = MyCoutries[i];
            let countriesAndEmojis = `${theCountries}  ${theFlags}`;
            arrayOfCoutries.push(countriesAndEmojis);
        }
        console.log('???'+arrayOfCoutries)

        return arrayOfCoutries;
    }

    const addingCountry = (country) =>{
        let newCountries = [];
        if(country){
            country = country.charAt(0).toUpperCase() + country.slice(1);
            // console.log(newCountries += country);
            return newCountries += country;
        }
    }

    const addingFlags = (flags) =>{
        let newFlags = [];
        if(flags){
            return newFlags += flags;

        }
    }

    const sortingAsc = (order) =>{
        console.log(sorted.sort());
        return sorted.sort();
    }

    const sortingDesc = (order) =>{
        return sorted.sort().reverse();
    }

    const errors = (country, flag) =>{
        let noFlagEmoji = 'Please enter flag emoji';
        let noCountry = 'Please enter a country';
        let noCountryAndFlag = 'Please copy and paste flag emoji and enter a country';

        if(!country && !flag){
            return noCountryAndFlag;
        }
        if(!flag){
            return noFlagEmoji

        }else if(!country){
            return noCountry
        }else{
            return '';
        }

    }

    const testingRegex = (myflags) =>{
        let emojiTestRegex = 'Please only insert flag emoji';
        let testMatchingRegex = regex.test(myflags);

        if(!testMatchingRegex){
            return emojiTestRegex;
        }
    }

    // spread operator
    const flagsAndCountries = [...countries, ...flags];
    // console.log(flagsAndCountries)

    return{
        setCountries,
        getCountries,
        addingCountry,
        addingFlags,
        sortingAsc,
        sortingDesc,
        errors,
        testingRegex
    }
}

// link for options emojis
// spelling error in error messages
