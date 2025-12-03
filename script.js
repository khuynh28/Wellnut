// old from when copy js file
// document.addEventListener('DOMContentLoaded', () => {
    
// });


// (MOBILE) NAV BAR SCRIPT //
// function myFunction() {
//   var x = document.getElementById("wellnutLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBarFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// function toAboveTitle() {
//   const element = document.getElementById("content");
//   element.scrollIntoView();
// }
// END OF NAV BAR SCRIPT //


// When the user scrolls down 50px from the top of the document, resize the header's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.maxWidth = "500px";
//   } else {
//     document.getElementById("header").style.maxWidth = "1000px";
//   }
// }


// TO TOP BUTTON SCRIPT //
// Get the button
let topbutton = document.getElementById("toTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      topbutton.style.display = "block";
    } else {
      topbutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topButtonFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// END OF TO TOP BUTTON SCRIPT //


// MONTH YEAR SWITCH TOGGLE //
function monthYearFunc() {
  var checkBox = document.getElementById("monthYearCheck");
  var monthYearBronze = document.getElementById("monthYearBronze")
  if (checkBox.checked == true){
    // tierBronze.style.display = "block";
    monthYearBronze.textContent = "$100 / yearly";
    monthYearSilver.textContent = "$160 / yearly";
    monthYearGold.textContent = "$270 / yearly";

  } else {
    //  tierBronze.style.display = "none";
    monthYearBronze.textContent = "$10 / monthly";
    monthYearSilver.textContent = "$16 / monthly";
    monthYearGold.textContent = "$27 / monthly";
  }
}
// END OF MONTH YEAR SWITCH TOGGLE //


// FAQ QUESTION TOGGLE ACCORDION //
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("activeAccordion");
    this.classList.toggle("bgToggle");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// END OF FAQ QUESTION TOGGLE ACCORDION //


