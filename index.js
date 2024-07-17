var timeDisplay = document.getElementById("time");


function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("menu-bar");
  var mybutton = document.getElementById("myBtn");

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
    navbar.style.backgroundColor = "rgba(240, 240, 240, 0.1)";
    navbar.style.backdropFilter = "blur(20px)";
    navbar.style.color = "black";
  } else {
    mybutton.style.display = "none";
    navbar.style.backgroundColor = "transparent";
    navbar.style.backdropFilter = "none";
    navbar.style.color = "white";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
