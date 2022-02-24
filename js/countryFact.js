const AddCountries = () =>{
    var MyCoutries = localData || [];

    const getCountries = () =>{
        console.log('MyCoutries'+MyCoutries)
        return MyCoutries;
    }



    return{
        getCountries
    }
}
