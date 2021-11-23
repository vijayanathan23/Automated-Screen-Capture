fs = require("fs")
const {Builder, By, Key, until} = require('selenium-webdriver');

if (process.argv.length < 3) {
    console.log("Pleasae enter filename");
    process.exit(1);
  }
  // Read the file and print its contents.
  var fs = require('fs')
    , filename = process.argv[2];
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    console.log("data "+data)
    func_parse(data)
  });



  function func_parse(data)
  {
    urls = data.split("\r\n");
    for(i=0;i<urls.length-1;i++)
    {
      screenCapture(urls[i])
    }
  }


  function screenCapture(url)
  {
    //fs.mkdir();
    new_url1 = "https://"+url;
    //new_url2 = "http://"+url;
    console.log("SC "+ new_url1);
  }