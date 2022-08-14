function w3_open() {
    document.getElementById("sidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("sidebar").style.display = "none";
}

function w3_accordion(elementId) {
    var x = document.getElementById(elementId);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function w3_dropdown(elementId) {
    var x = document.getElementById(elementId);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


var slideIndex = 1;
// showDivs(slideIndex);
function plusDivs(slidesName, dotsName, n) {
  showDivs(slidesName, dotsName, slideIndex += n);
}

function currentDiv(slidesName, dotsName, n) {
  showDivs(slidesName, dotsName, slideIndex = n);
}

function showDivs( slidesName, dotsName, n) {
  var i;
  var x = document.getElementsByClassName(slidesName);
  var dots = document.getElementsByClassName(dotsName);
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}

function displayModalById(modalId, display) {
    var modal = document.getElementById(modalId);
    modal.style.display = display ? "block" : 'none';
}