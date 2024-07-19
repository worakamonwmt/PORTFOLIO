var timeDisplay = document.getElementById("time");


function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

window.onscroll = function () {
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
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function radial_animate() {
  $('svg.radial-progress').each(function (index, value) {
    $(this).find('circle.bar--animated').removeAttr('style');
    // Get element in Viewport
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    if (elementBottom > viewportTop && elementTop < viewportBottom) {
      var percent = $(value).data('countervalue');
      var radius = $(this).find('circle.bar--animated').attr('r');
      var circumference = 2 * Math.PI * radius;
      var strokeDashOffset = circumference - ((percent * circumference) / 100);
      $(this).find('circle.bar--animated').css({
        'stroke-dasharray': circumference,
        'stroke-dashoffset': circumference
      }).animate({ 'stroke-dashoffset': strokeDashOffset }, 2800);
    }
  });
}

// To check If it is in Viewport 
var $window = $(window);
function check_if_in_view() {
  $('.countervalue').each(function () {
    if ($(this).hasClass('start')) {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).removeClass('start');
        $('.countervalue').text();
        var myNumbers = $(this).text();
        if (myNumbers == Math.floor(myNumbers)) {
          $(this).animate({
            Counter: $(this).text()
          }, {
            duration: 2800,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now) + '%');
            }
          });
        } else {
          $(this).animate({
            Counter: $(this).text()
          }, {
            duration: 2800,
            easing: 'swing',
            step: function (now) {
              $(this).text(now.toFixed(2) + '$');
            }
          });
        }

        radial_animate();
      }
    }
  });
}

$window.on('scroll', check_if_in_view);
$window.on('load', check_if_in_view);
