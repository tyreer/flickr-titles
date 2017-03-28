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
  const test = ({
      protocol: request.protocol,
      path: request.path
  });

  response.render('pages/index2', {Check: test.path })
  // function makeAJAXRequest () {
  //
  //     var request = new XMLHttpRequest();
  //     var url = "//api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+APIKEY+"&format=json&nojsoncallback=?&text=";
  //
  //     request.addEventListener("load", writeResponse);
  //
  //     request.open("GET", url + document.getElementById("query").value);
  //     request.send();
  // }
  //
  // function writeResponse() {
  //     resultsArray = JSON.parse(this.responseText);
  //     var htmlString = "";
  //
  //     for (var i = 0; i < resultsArray.photos.photo.length; i++) {
  //         var titleText = resultsArray.photos.photo[i].title.substring(0,133);
  //         htmlString += "<div class='photo-container'> <div class='photo'> <img id='outer" + i + "' src = https://farm" + resultsArray.photos.photo[i].farm + ".staticflickr.com/" + resultsArray.photos.photo[i].server + "/" + resultsArray.photos.photo[i].id + "_" + resultsArray.photos.photo[i].secret +".jpg> <div id='" + i + "' class='title_overlay'> <p>" + titleText + "</p> </div> </div> </div>"
  //     }
  //
  //     document.getElementById("results").innerHTML = htmlString;
  //
  //      for (var j = 0; j < resultsArray.photos.photo.length; j++) {
  //         // document.getElementById(j).addEventListener("click", makeAJAX2Request);
  //         document.getElementById(j).addEventListener("click", toggleOverlayOff);
  //         document.getElementById("outer"+j).addEventListener("click", toggleOverlayOn);
  //     }
  // }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
