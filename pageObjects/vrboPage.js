var vrboAsset = require('../testAssests/vrboAsset')

var vrboNav ={
    
    replay: function(browser, foreach){
        this
        .firstInfoEnter()
        searchArray.forEach(search=>{
            this.secondInfoEnter(browser, search)
            
        })
    },
        login: function(browser, login){
            this
            // .click('@loginDropdown')
            // .setValue('@searchLocation', 'new york')
            .pause(1100)
            .click('@login')
            .pause(2000)
            .setValue('@email', 'cameronwalk9@gmail.com')
            .click('@getStartedBtn')
            .setValue('@password', 'stinger0')
            return this
        },
        cleanUp: function(browser, cleanUp){
            this
            .click('//*/div[@class="site-header-nav__scratchpad"]')
            .click('@deleteBoard')
            .click('@confirmDelete')
            return this
        },
    

    firstInfoEnter: function (browser, area){
        this
        .useXpath()
        .pause(1000)
        this.setValue('@searchLocation', 'Georgia')
        .pause(1000)
        .click('@searchBtn')
        .click('@saveBtn1')
        .setValue('@nameBoardInput', "For Fun")
        .click('@saveProp')
        .click('@done')
        .pause(1000)
        .click('//*/div[@class="site-header-nav__scratchpad"]')
        .click('@locationClick')
        .pause(1000)
        .verify.elementPresent('//*/span[contains(text(),"Georgia")]')
        .click('@homeButton')
        .click('//*/div[@class="site-header-nav__scratchpad"]')
        .click('@locationClick')
        .verify.elementPresent('//*/span[contains(text(),"Georgia")]')
        .click('@homeButton')
        // searchArray.forEach(search=>{
        //     this.infoEnter(browser, search)
        // })
        return this
    },
    secondInfoEnter: function (browser, area){
        this
        .useXpath()
        .pause(1000)
        .clearValue('@searchLocation')
        .pause(1000)
        this.setValue('@searchLocation', area.sel)
        .pause(1000)
        .click('@searchBtn')
        .click('@saveBtn1')
        // .setValue('@nameBoardInput', "For Fun")
        .pause(1000)
        .click('@saveMore')
        .click('@done')
        .pause(1000)
        .click('//*/div[@class="site-header-nav__scratchpad"]')
        .click('@locationClick')
        .pause(1000)
        .verify.elementPresent(`//*/span[contains(text(),"${area.result}")]`)
        .click('@homeButton')
        .click('//*/div[@class="site-header-nav__scratchpad"]')
        .click('@locationClick')
        .verify.elementPresent(`//*/span[contains(text(),"${area.result}")]`)
        .click('@homeButton')
        // searchArray.forEach(search=>{
        //     this.infoEnter(browser, search)
        // })
        return this
    
    },
}
module.exports = {
    url: "https://www.vrbo.com/",
    commands: [vrboNav],
    elements: {
        searchLocation: {
            selector: '//*/input[@id="react-destination-typeahead"]',
            locateStrategy: 'xpath'
        },
        searchBtn: {
            selector: '//*/button[@type="submit"]',
            locateStrategy: 'xpath'
        },
        saveBtn1: {
            selector: '(//*/button[@tabindex="-1"][1])',
            locateStrategy: 'xpath'
        },
        nameBoardInput: {
            selector: '//*/input[@name="createBoardName"]',
            locateStrategy: 'xpath'
        },
        saveProp: {
            selector: '//*/button[@class="btn btn-primary btn-sm"]',
            locateStrategy: 'xpath'
        },
        done: {
            selector: '//*/button[@class="btn btn-default btn-sm"]',
            locateStrategy: 'xpath'
        },
        tripBoard: {
            selector: '//*/div[@class="site-header-nav__scratchpad"]',
            locateStategy: 'xpath'
        },
        locationClick: {
            selector: '//*/div[@class="three-pack__image three-pack__image--rounded-top-and-bottom-left three-pack__image--left-panel"]',
            locateStrategy: 'xpath'
        },
        homeButton: {
            selector: '//*/img[@alt="Vrbo logo"]',
            locateStrategy: 'xpath'
        },
        saveMore:{
            selector:'//*/button[@class="btn btn-default SaveButton btn-sm"]',
            locateStrategy: 'xpath'
        },
        login:{
            selector:'(//*/li[@class="site-header-login__item"][0])',
            locateStrategy:'xpath'
        },
        email:{
            selector:'//*/input[@type="email"]',
            locateStrategy:'xpath'
        },
        getStartedBtn:{
            selector:'//*/button[@type="submit"]',
            locateStrategy:'xpath'
        },
        password:{
            selector:'//*/input[@type="password"]',
            locateStrategy:'xpath'
        },
        confirmDelete:{
            selector:'//*/button[@data-wdio="tripboard-summary__hit-delete--confirm"]',
            locateStrategy:'xpath'
        },
        deleteBoard:{
            selector:'//*/button[@class="btn btn-link tripboard-summary-hit__menu-remove btn-xs"]',
            locateStrategy:'xpath'
        },
        loginDropdown:{
            selector:'//*/button[@id="site-header__login"]'
        }
    }
}