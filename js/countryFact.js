const AddCountries = () =>{
    var MyCoutries = localSotageCountries || [];

    const getCountries = (addCountry) =>{
        addCountry.push(MyCoutries);
        return MyCoutries;
    }



    return{
        getCountries
    }
}
