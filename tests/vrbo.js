
var obj = {}

var vrboObject = require('../pageObjects/vrboPage')

module.exports = {
    beforeEach: browser => {
        obj = browser.page.vrboPage()
        obj
            .navigate()
    },
    after: browser => {
        obj.end()
    },
    'first search': browser => {
        obj
        .searchHomePage('Saint-Tropez ', 'Saint-Tropez City Centre, Saint-Tropez, Var, France')
    },
    'After initial search': browser => {
        citySearch.forEach(test => {
            searchPage(obj, test)
        })
    },
    "save function logged out":browser=>{
        obj
        .replay()
    },
    "save function logged in":browser=>{
        obj
        .login()
        .replay()
        .cleanUp()
    }

}