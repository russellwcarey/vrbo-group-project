
var obj = {}

var vrboObject = require('../pageObjects/vrboPage')
// var vroboAsset=require('..')


var search = (browser, destination) => {
    browser
        .click('@search')
        .setValue('@search', destination.search)
        .pause(1000)
        .click('@spotOne')
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
        .verify.containsText('@search', destination.results)

}

var citySearch = [
    { search: 'Waimea', results: 'Waimea' },
    { search: 'Oregon Coast', results: 'Oregon Coast' },
    { search: 'Coronado National Forest', results: 'Coronado National Forest' }
]

var vp = {}
module.exports = {
    beforeEach: browser => {
        vp = browser.page.vrboPage()
        vp
            .navigate()
    },
    after: browser => {
        vp.end()
    },
    'Search': browser => {
        citySearch.forEach(test => {
            search(vp, test)
        })


    },

    
    "save function logged out":browser=>{
        obj
        .replay()
    },
    // "save function logged in":browser=>{
    //     obj
    //     .login()
    //     .replay()
    //     .cleanUp()
    // }

}