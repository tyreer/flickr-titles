'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

var express = require('express');
var app = express();
var url = require('url');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/*', function(request, response) {
  const queryFromURL = request.path.substring(1);

  let allFetchPromises = [];

  const resultsArray = fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.APIKEY}&format=json&nojsoncallback=?&text=${queryFromURL}`)
    .then( response => {
      return response.json();
    })

  allFetchPromises.push(resultsArray);

  Promise.all(allFetchPromises).then(data => {
    let returnQuery = queryFromURL;
    while(returnQuery.indexOf('%') > -1) {
        returnQuery = returnQuery.substr(0, returnQuery.indexOf('%')).concat(' ', returnQuery.substr(returnQuery.indexOf('%')+3));
      }
    response.render('pages/index2', { Check: returnQuery, data: data })
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
