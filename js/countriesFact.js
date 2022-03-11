const AddCountries = (localStorageCountries) =>{
    // console.log(localStorageCountries);
    const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
    const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];
    const regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;

    let sorted = countries.map((country, i) => {
        return country + ' ' + flags[i]
        
    });

    let MyCoutries = countries || [];
    let myFlags = flags || [];

    const setCountries = (addCountry, addFlags) =>{
        if(addCountry && addFlags){
            addCountry = addCountry.charAt(0).toUpperCase() + addCountry.slice(1);
            if(!MyCoutries.includes(addCountry) || !MyCoutries.includes(addFlags)){
                console.log(MyCoutries)
                MyCoutries.push(addCountry + ' ');
                myFlags.push(addFlags);
            }
        }
        
        return ;
    }
    
    const getCountries = () => {
        // flags.push(displayFlags); 
        // countries.push(displayCountry);
        // console.log('???'+sorted);

        return sorted;
    }

    const addingCountry = (country) =>{
        let newCountries = [];
        // if(!sorted.include(country)){
            country = country.charAt(0).toUpperCase() + country.slice(1);
            newCountries.push(country)
            return newCountries;
        // }
    }

    const addingFlags = (flags) =>{
        let newFlags = [];
        if(!sorted.includes(flags)){
            newFlags.push(flags);
            return newFlags;

        }
    }

    const sortingAsc = (order) =>{
        return sorted.sort();
    }

    const sortingDesc = (order) =>{
        return sorted.sort().reverse();
    }

    const errors = (country, flag) =>{
        let noCountryAndFlag = 'Please copy and paste flag emoji and enter a country';

        if(!country && !flag){
            return noCountryAndFlag;
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
        testingRegex,
        // display
    }
}

// link for options emojis
// spelling error in error messages
