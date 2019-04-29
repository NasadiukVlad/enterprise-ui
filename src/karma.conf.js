// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const localhost_hostname = process.env.karma_localhost ? process.env.karma_localhost : "localhost";
const browsers = process.env.Selenium_remote_URL ? ["chrome_jenkins"] : ["ChromeHeadless"];

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-webdriver-launcher"),
      require("karma-spec-reporter"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-json-fixtures-preprocessor"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "../coverage"),
      reports: ["html", "lcovonly"],
      fixWebpackSourcePaths: true,
    },
    customLaunchers: {
      chrome_jenkins: {
        base: "WebDriver",
        config: {
          hostname: process.env.Selenium_remote_HOST,
          port: process.env.Selenium_remote_PORT,
        },
        browserName: "chrome",
        pseudoActivityInterval: 30000,
      },
    },
    browserNoActivityTimeout: 20000,
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: browsers,
    singleRun: false,
    hostname: localhost_hostname,
    reportSlowerThan: 3000,
  });
};
