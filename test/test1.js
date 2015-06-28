var assert = require('chai').assert;

describe('index page', function(){
  it('should have a heading', function() {
    browser.get('/');
    element(by.xpath('//h1')).getText().then(function(text) {
      assert.equal(text, 'Welcome');
    });
  });
});
