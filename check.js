/*const {Builder, By} = require('selenium-webdriver');
let fs = require('fs');
let driver =  new Builder()
       .forBrowser('chrome')
       .build();

*/
const webdriver = require('selenium-webdriver');
/*const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
*/

let driver = new webdriver.Builder()
    .forBrowser('chrome').build();
    

driver.get('https://selenium.dev');

//let driver = new chrome.ServiceBuilder(chromedriver.path).build();

console.log(driver)
