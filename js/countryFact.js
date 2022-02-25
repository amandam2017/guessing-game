const AddCountries = (StorageCountries) =>{
    let MyCoutries = StorageCountries || [];

    const setCountries = (addCountry) =>{
        // addCountry = addCountry.charAt(0).toUpperCase() + addCountry.slice(1);
        if(!MyCoutries.includes(addCountry)){
            MyCoutries.push(addCountry);
        }
        return;
    }

    const getCountries = () => {
        return MyCoutries;
    }

    const addingFlagAndCountry = (fruits) =>{
        let newData = [];
        console.log('fruit'+ fruits);
        if(fruits){
            fruits = fruits.charAt(0).toUpperCase() + fruits.slice(1);

            return newData += fruits;
        }
    }

    return{
        setCountries,
        getCountries,
        addingFlagAndCountry
    }
}
