'use strict'

document.getElementById("getdata").addEventListener("click", triggerQueryRoute);

//Add event listener for enter key
document.getElementById("query").addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
          document.getElementById("getdata").click();
        }
    })

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
