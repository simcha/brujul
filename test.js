const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

describe('Checkout Google.com', function () {
    
    let driver;    
    //Przed rozpoczęciem testu wybieramy przeglądarkę
    before(async function() {
        driver = await new Builder().forBrowser('firefox').build();
       
    });    

    // Teraz piszemy kroki w naszym teście.
    it('Search on Google', async function() {


    });    
    // zamykamy przeglądarkę
    after(() => driver && driver.quit());
})