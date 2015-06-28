var fs = require('fs'),
  http = require('http'),
  server;

before(function() {
  server = http.createServer(require('../server'));
  server.listen(0);
  browser.baseUrl = 'http://'+ server.address().address +':'+ server.address().port;
});

after(function(){
  server.close();
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});

afterEach(function () {
  var title = this.currentTest.title.replace(/\ /g, '-');
  var actualFile = 'screenshots/actual/'+ title + '.png';
  var expectedFile = 'screenshots/expected/'+ title + '.png';
  browser.takeScreenshot().then(function (png) {
    var stream = fs.createWriteStream(actualFile);
    stream.write(new Buffer(png, 'base64'));
    stream.end();
  }).then(function() {
    /*
     * compare the actual and expected screenshots
     * as of now lets commit the expected back to the repo.
     */
  });
})
