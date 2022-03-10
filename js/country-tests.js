describe('unit test for country flag', function(){
    it('should be able to set and get country', function(){
        let factFun = AddCountries();
        factFun.setCountries('Ireland 🇮🇪');
        assert.equal('Brazil 🇧🇷', factFun.getCountries());
    })
    it('should add a new country which is Brazi', function(){
        let factFun = AddCountries();

        factFun.addingCountry('Brazil 🇧🇷');
        assert.equal('Brazil 🇧🇷', factFun.getCountries());

    })
    it('should return error message when a text is entered instead of the flag emoji', function(){
        let factFun = AddCountries();
 
        factFun.addingCountry('hgggg');
        assert.equal('Please only insert flag emoji', factFun.testingRegex());

    });
  
    it('should return error message if both country and emoji input field is empty', function(){
        let factFun = AddCountries();
 
        factFun.addingCountry('');
        factFun.addingFlags('');
        assert.equal('Please copy and paste flag emoji and enter a country', factFun.errors());

    });
    it('should sort countries array in ascending order', function(){
        let factFun = AddCountries();

        assert.deepEqual(['Argentina 🇦🇷',
        'Brazil 🇧🇷',
        'Chile 🇨🇱',
        'Ireland 🇮🇪',
        'Malawi 🇲🇼',
        'Rwanda 🇷🇼',
        'Switzerland 🇨🇭',
        'Uganda 🇺🇬',
        'Zambia 🇿🇲'],factFun.sortingAsc());
    });

    it('should sort countries array in descending order', function(){
        let factFun = AddCountries();

        assert.deepEqual(['Zambia 🇿🇲',
            'Uganda 🇺🇬',
            'Switzerland 🇨🇭',
            'Rwanda 🇷🇼',
            'Malawi 🇲🇼',
            'Ireland 🇮🇪',
            'Chile 🇨🇱',
            'Brazil 🇧🇷',
            'Argentina 🇦🇷'],factFun.sortingDesc());
    });

});