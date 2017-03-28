'use strict'

for (let j = 0; j < 100; j++) {
    document.getElementById(j).addEventListener("click", toggleOverlayOff);
    document.getElementById("outer"+j).addEventListener("click", toggleOverlayOn);
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
