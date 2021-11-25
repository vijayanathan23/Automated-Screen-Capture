fs = require("fs")
const webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
path = require('path');
var ct = 0;
if (process.argv.length < 3) {
    console.log("Pleasae enter filename");
    process.exit(1);
  }
  // Read the file and print its contents.
  filename = process.argv[2];
  fs.readFile(filename, 'utf8', async function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    console.log("data "+data)
    var newDate = new Date();
    let foldName = newDate.getDate()+"_"+newDate.getTime();
    fs.mkdir(path.join(__dirname, foldName), (err) => {
      if (err) {
          return console.error(err);
      }
      console.log('Directory created successfully!');
  });

    await func_parse(data,foldName)
  });



  async function func_parse(data,fold)
  {
    urls = data.split("\r\n");
    for(i=0;i<urls.length;i++)
    {
      //if(ct == i)
      await screenCapture(urls[i],fold)
    }
  }


  async function screenCapture(url,fold)
  {
    //fs.mkdir();
    new_url1 = "https://"+url;
    //new_url2 = "http://"+url;
    console.log("SC "+ new_url1);
    await example(new_url1,fold,url);
    
 }



async function example(url,fold,name) {
    let driver = await new Builder()
      .forBrowser('chrome')
      .build();
    
    await driver.get(url).catch(async (err)=>{
      console.log("Error is "+url+" => "+err);
      console.log(url+" not found");
     // await driver.quit();
    })
    
    let encodedString = await driver.takeScreenshot();
    let date =  new Date();
    let time = date.getTime();
    await fs.writeFileSync('./'+fold+'/'+name+'.png', encodedString, 'base64');
    await driver.quit();
}


