var express = require('express'),
  app = express();

app.all('*', function(req, res) {
  res.sendFile('index.html', {root:'src'});
});

if(require.main === module){
  app.listen(process.env.PORT ||3000);
} else {
  module.exports = app;
}
