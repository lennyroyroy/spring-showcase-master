var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 



// Card Flip
function flip1() {
    $('.card1').toggleClass('flipped');
}

function flip2() {
    $('.card2').toggleClass('flipped');
}

function flip3() {
    $('.card3').toggleClass('flipped');
}

function flip4() {
    $('.card4').toggleClass('flipped');
}

function flip5() {
    $('.card5').toggleClass('flipped');
}

function flip6() {
    $('.card6').toggleClass('flipped');
}

function flip7() {
    $('.card7').toggleClass('flipped');
}

function flip8() {
    $('.card8').toggleClass('flipped');
}

function flip9() {
    $('.card9').toggleClass('flipped');
}







// 

