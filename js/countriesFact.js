const AddCountries = (localStorageCountries) =>{
    const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
    const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];
    
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
        return sorted.sort();
    }

    const sortingDesc = (order) =>{
        return sorted.sort().reverse();
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
    }
}

// link for options emojis
// spelling error in error messages
