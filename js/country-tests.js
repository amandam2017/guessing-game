describe('unit test for country flag', function(){
    it('should be able to add armenian and its flag', function(){
        let factFun = AddCountries();
        factFun.addingCountry('armenian');
        factFun.addingFlags('🇦🇲');
    })
    it('should return error message when a text is enetered instead of the flag emoji', function(){
        let factFun = AddCountries()
        factFun.addingCountry('Australia');
        factFun.addingFlags('australia')
    })
});