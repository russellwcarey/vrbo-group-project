// const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const PKG = require("./package.json");

const config = {
  src_folders: ["./tests"],
  page_objects_path: "./pageObjects",
  //globals_path: "./globals.js",
  output_folder: "./tests_output",

  // selenium: {
  //   start_process: false,
  //   server_path: seleniumServer.path,
  //   host: "127.0.0.1",
  //   port: 4444,
  //   cli_args: {
  //     "webdriver.chrome.driver": chromedriver.path,
  //     "webdriver.gecko.driver": "",
  //     "webdriver.edge.driver": "",
  //   },
  // },

  webdriver: {
    start_process: true,
    server_path: chromedriver.path,
    port: 9515,
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          w3c: false,
        },
      },
      silent: true,
      screenshots: {
        enabled: false,
        path: "./tests_output/screenshots",
      },
      globals: {
        waitForConditionTimeout: 5000,
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ["window-size=1366,768", "--incognito"],
        },
      },
    },
    edge: {
      desiredCapabilities: {
        browserName: "MicrosoftEdge",
      },
    },
  },
};

module.exports = config;

// COPIED AND PASTED DEFAULT MODULE.EXPORT VALUES DUE TO PROBLEMS WITH TEST RUNNER NOT INITIALIZING
// LEAVING THESE VALUES INSIDE PROJECT FOLDER AND COMMENTED OUT --- PLEASE DON'T DELETE

// module.exports = {
//   "src_folders": ["tests"],

//   "webdriver": {
//     "start_process": true,
//     "server_path": "node_modules/.bin/chromedriver",
//     "port": 9515
//   },

//   "test_settings": {
//     "default": {
//       "desiredCapabilities": {
//         "browserName": "chrome"
//       }
//     }
//   }
// };