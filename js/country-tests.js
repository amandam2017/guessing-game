describe('unit test for country flag', function(){
    it('should be able to set and get country', function(){
        let factFun = AddCountries();
        factFun.setCountries('Argentina 🇦🇷');
        assert.equal('Argentina 🇦🇷', 'Brazil 🇧🇷', 'Chile 🇨🇱', 'Zambia 🇿🇲', 'Uganda 🇺🇬', 'Malawi 🇲🇼', 'Rwanda 🇷🇼', 'Ireland 🇮🇪', 'Switzerland 🇨🇭', factFun.getCountries());
    })
    it('should return error message when a text is enetered instead of the flag emoji', function(){
        let factFun = AddCountries()
        factFun.addingCountry('Australia');
        factFun.addingFlags('🇦🇷');
        assert.equal('Argentina 🇦🇷', factFun.getCountries());

    })
});