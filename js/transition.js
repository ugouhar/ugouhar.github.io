//First scroll to top of window
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

//Different screen widths
var mediaMd = window.matchMedia("(max-width: 768px)");
var mediaLg = window.matchMedia("(max-width: 1170px)");
var mediaXl = window.matchMedia("(min-width: 1171px)");
var sc_width = [mediaMd, mediaLg, mediaXl];

//Check is div is inside the viewport of document
function isVisible(elem) {
  var x = $(`#${elem}`);
  var top_of_element = x.offset().top;
  var bottom_of_element = x.offset().top + x.outerHeight();

  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    return true;
  } else {
    return false;
  }
}

//Fade up transition
function applyTransition(elem, delay) {
  elem.setAttribute("style", `animation: animatebottom ${delay}s`);
  elem.classList.add("w3-animate-bottom");
}

//Calling fade up transition on different screen width
function transitionOnScroll() {
  if (isVisible("refBar")) {
    var skillPercent = document.getElementsByClassName("skill-percent");
    var skillNum = document.getElementsByClassName("skill-num");
    var percent = [70, 60, 45, 50, 40, 35];
    for (let i = 0; i < percent.length; i++) {
      skillPercent[i].style.width = `${percent[i]}%`;
      skillPercent[i].style.transition = "1.2s";
    }

    for (let i = 0; i < skillNum.length; i++) {
      setTimeout(() => {
        skillNum[i].innerText = `${percent[i]}%`;
      }, 1000);
    }
  }

  var edu = document.getElementsByClassName("edu");
  if (sc_width[0].matches) {
    //mobile
    var divIDs = ["clgID", "hscID", "sscID", "esID"];
    for (let i = 0; i < 4; i++) {
      if (isVisible(divIDs[i])) {
        applyTransition(edu[i], 0.5);
      }
    }
  } else if (sc_width[1].matches) {
    // tablet
    if (isVisible("clgID")) {
      for (let i = 0; i < edu.length - 2; i++) {
        applyTransition(edu[i], 0.5 + i * 0.3);
      }
    }
    if (isVisible("sscID")) {
      for (let i = 2; i < edu.length; i++) {
        applyTransition(edu[i], 0.5 + (i - 2) * 0.3);
      }
    }
  } else if (sc_width[2].matches) {
    //PC and Laptops
    if (isVisible("clgID")) {
      for (let i = 0; i < edu.length; i++) {
        applyTransition(edu[i], 0.5 + i * 0.3);
      }
    }
  }
}

//Calling transition on scroll
document.onscroll = () => {
  transitionOnScroll();
};

/**
 * To do
 * To remove automatic transition on footer
 */
