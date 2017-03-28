'use strict'

// document.getElementById("getdata").addEventListener("click", jumpDownTimer);
// document.getElementById("getdata").addEventListener("click", showTop);
// document.getElementById("getdata").addEventListener("click", eraseQuery);
// document.getElementById("top").addEventListener("click", hideTop);
document.getElementById("getdata").addEventListener("click", triggerQueryRoute);

//Add event listener for enter key
document.getElementById("query").addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
          document.getElementById("getdata").click();
        }
    })

var resultsArray = [];

function triggerQueryRoute(){
  window.location.href = window.location.href + document.getElementById("query").value;
}

function toggleOverlayOff(){
    if (this.className === 'title_overlay') {
      this.className = 'title_overlay_off';
    }
}

function toggleOverlayOn(){
    let id = this.getAttribute("id");
    let divId = 0;
    if (id.length <= 6) {
        divId = id.charAt(5);
    } else if (id.length > 6) {
        divId =  id.charAt(5)+id.charAt(6);
    }

    document.getElementById(divId).className = 'title_overlay';
}

// function jumpDownTimer(){
//    let timeoutID = window.setTimeout(jumpDown, 800);
// }

function jumpDown(){
    window.scroll(0, 600);
}

function showTop(){
   if (window.innerWidth > 728) {
        document.getElementById("top").className = 'top-jump-show';
    }
}

function hideTop(){
     if (window.innerWidth > 728 && document.getElementById("top").className === 'top-jump-show'){
            document.getElementById("top").className = 'top-jump';
    }
}

function eraseQuery(){
   document.getElementById("query").value = '';
}


// ****************
// Archive
// ****************
// function makeAJAX2Request () {
//     var request2 = new XMLHttpRequest();
//     var url = "//api.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=14d6c693b3921164ffa803b24ba7fda2&format=json&nojsoncallback=?&user_id=";

//     url += resultsArray.photos.photo[this.id].owner;

//     var htmlString2 = "";

//     htmlString2 +=  "<img src = https://farm" + resultsArray.photos.photo[this.id].farm + ".staticflickr.com/" + resultsArray.photos.photo[this.id].server + "/" + resultsArray.photos.photo[this.id].id + "_" + resultsArray.photos.photo[this.id].secret +".jpg>";

//     document.getElementById("results").innerHTML = htmlString2;

//     request2.addEventListener("load", writeSecondStage);

//     request2.open("GET", url);
//     request2.send();
// }

// function writeSecondStage() {
//     var response2 = JSON.parse(this.responseText);

//     var htmlString3 = document.getElementById("results").innerHTML;

//     htmlString3 +=  "<h3>Courtesy of: " + response2.person.realname._content + "</h3> <p> <a href =" + response2.person.photosurl._content + "> Check out more </a> </p>";

//     document.getElementById("results").innerHTML = htmlString3;
// }
