var assert = require('chai').assert;

describe('index page', function(){
  it('should have a input field to enter name', function() {
    browser.get('/');
    element(by.id('name')).isPresent().then(function(isPresent){
      assert.isTrue(isPresent);
    });
  });
});
