const AddCountries = (localStorageCountries) =>{
    const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
    const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];
    
    let MyCoutries = countries || [];
    let myFlags = flags || [];

    const setCountries = (addCountry, addFlags) =>{
        // console.log('showflags'+addFlag)
        if(addCountry && addFlags){
            addCountry = addCountry.charAt(0).toUpperCase() + addCountry.slice(1);
            if(!MyCoutries.includes(addCountry)){
                MyCoutries.push(addCountry + ' ');
                myFlags.push(addFlags);
            }

            // console.log('does flags shows as well?'+MyCoutries)
        }
        
        return;
    }
    
    const getCountries = () => {
        var arrayOfCoutries = []
        for (let i = 0; i < myFlags.length; i++) {
            const f = myFlags[i];
            const c = MyCoutries[i];
            let countriesAndEmojis = `${f}  ${c}`;
            arrayOfCoutries.push(countriesAndEmojis);
        }
        // let countriesAndEmojis = `${myFlags}  ${MyCoutries}`;
        console.log('???'+arrayOfCoutries)

        return arrayOfCoutries;
    }

    const addingFlagAndCountry = (country) =>{
        let newCountries = [];
        if(country){
            country = country.charAt(0).toUpperCase() + country.slice(1);

            return newCountries += country;
        }
    }

    const sortingAsc = (order) =>{
        return countries.sort();
    }

    const sortingDesc = (order) =>{
        return countries.sort().reverse();
    }

    const addingFlags = (flags) =>{
        let newFlags = [];
        if(flags){
            return newFlags += flags;

        }

    }

    return{
        setCountries,
        getCountries,
        addingFlagAndCountry,
        addingFlags,
        sortingAsc,
        sortingDesc
    }
}
