
var vrboAsset = require('../testAsset/vrboAsset')

var vrboNav = {
    searchForEach: function (browser, searchPage) {
        this
        citySearch.forEach(test => {
            this.searchPage(browser, test)
        })

    },

    replay: function (browser, foreach) {
        this
            .firstInfoEnter()
        searchArray.forEach(search => {
            this.secondInfoEnter(browser, search)

        })
    },
    searchHomePage: function (destinationSearch, destinationResults) {
        this
            .click('@searchLocation')
            .setValue('@searchLocation', destinationSearch)
            .pause(1000)
            .click('div[data-suggestion-key="0"]')
            // .pause(500)
            .useXpath()
            .click('(//*[text()="5"])[2]')
            .click('(//*[text()="12"])[2]')
            .pause(500)
            .click('(//span[@class="SVGIcon SVGIcon--16px flex-center"])[2]')
            .click('(//span[@class="SVGIcon SVGIcon--16px flex-center"])[2]')
            .click('(//span[@class="SVGIcon SVGIcon--16px flex-center"])[4]')
            .useCss()
            .click('button[type="submit"]')
            .useXpath()
            .pause(500)
            .verify.elementPresent('@searchLocation', `"${destinationResults}"`)
            .clearValue('@searchLocation')
        return this

    },
    searchPage: function (browser, destination) {
        this
            .pause(1000)
            .clearValue('@searchLocation')
            .pause(1000)
        this.setValue('@searchLocation', destination.search)
            .pause(1000)
            .useXpath()
            .click('@searchBtn')
            .pause(500)
        this.useXpath()
            .verify.elementPresent('@searchLocation', `"${destination.results}"`)
            .pause(1000)
            .click('@homeButton')

        return this
    },
    login: function (browser, login) {
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
    cleanUp: function (browser, cleanUp) {
        this
            .click('//*/div[@class="site-header-nav__scratchpad"]')
            .click('@deleteBoard')
            .click('@confirmDelete')
        return this
    },


    firstInfoEnter: function (browser, area) {
        this
            .useXpath()
            .pause(1000)
            .clearValue('@searchLocation')
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
        // .click('//div[@class="picker__overlay picker__overlay--selectable"][3]')
        // .click('(//span[@class="SVGIcon SVGIcon--16px flex-center"])[0]')
        // .click('(//span[@class="SVGIcon SVGIcon--16px flex-center"])[0]')
        // .click('(//span[@class="SVGIcon SVGIcon--16px flex-center"])[2]')
        // searchArray.forEach(search=>{
        //     this.infoEnter(browser, search)
        // })
        return this
    },
    secondInfoEnter: function (browser, area) {
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

    }
    // firstTripBoard: function (browser, area) {
    //     this
    //         .useXpath()
    //         .pause(1000)


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
            locateStrategy: 'xpath'
        },
        locationClick: {
            selector: '//*/div[@class="three-pack__image three-pack__image--rounded-top-and-bottom-left three-pack__image--left-panel"]',
            locateStrategy: 'xpath'
        },
        homeButton: {
            selector: '//*/img[@alt="Vrbo logo"]',
            locateStrategy: 'xpath'
        },
        saveMore: {
            selector: '//*/button[@class="btn btn-default SaveButton btn-sm"]',
            locateStrategy: 'xpath'
        },
        login: {
            selector: '(//*/li[@class="site-header-login__item"][0])',
            locateStrategy: 'xpath'
        },
        email: {
            selector: '//*/input[@type="email"]',
            locateStrategy: 'xpath'
        },
        getStartedBtn: {
            selector: '//*/button[@type="submit"]',
            locateStrategy: 'xpath'
        },
        password: {
            selector: '//*/input[@type="password"]',
            locateStrategy: 'xpath'
        },
        confirmDelete: {
            selector: '//*/button[@data-wdio="tripboard-summary__hit-delete--confirm"]',
            locateStrategy: 'xpath'
        },
        deleteBoard: {
            selector: '//*/button[@class="btn btn-link tripboard-summary-hit__menu-remove btn-xs"]',
            locateStrategy: 'xpath'
        },
        loginDropdown: {
            selector: '//*/button[@id="site-header__login"]',
            locateStrategy: 'xpath'
        },
        spotOne: {
            selector: 'div[data-suggestion-key="0"]',
        },
        tripBoardBtn: {
            selector: '//*/span[@class="site-header-nav__icon-label"]',
            locateStrategy: 'xpath'
        },
        newBoard: {
            selector: '//*/div[@class="tripboard-summary-hit card"][0]',
            locateStrategy: 'xpath'
        },
        newBoardModalInput: {
            selector: '//*/input[@class="form-control"][0]',
            locateStrategy: 'xpath'
        },
        newBoardModalCancel: {
            selector: '//*/button[@class="btn btn-default landing-page__cancelbutton btn-sm"]',
            locateStrategy: 'xpath'
        },
        newBoardModalCreate: {
            selector: '//*/button[@class="btn btn-primary landing-page__button btn-sm"]',
            locateStrategy: 'xpath'
        },
        // This is where it is supposed to switch to the base URL of https://www.vrbo.com/tripboard
        // Because I did things differently in my personal project, I'm not 100% sure whether 
        // I should be creating a new pageObject at this point
        newTbCard: {
            selector: '//*/div[@class="tripboard-summary-hit card"][1]',
            locateStrategy: 'xpath'
        },
        newTbCardInvite: {
            selector: '//*/button[@class="btn btn-default btn-xs"][0]',
            locateStrategy: 'xpath'
        },
        inviteFriendsLogin: {
            selector: '//*/button[@class="btn btn-primary"][0]',
            locateStrategy: 'xpath'
        }
        // // Double checking strategy - not sure if signup is needed for automation
        // // Also, possible duplicate selector?
        // vrboSignUp: {
        //     selector: '//*/'
    }
}
