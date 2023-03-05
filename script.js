document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// First, we create a boolean variable to keep track of whether the user has seen the animation
let animationSeen = false;

// Next, we create a function that will handle the animation
function handleAnimation() {
// Only run the animation if the user has not yet seen it
if (animationSeen == false) {
  // Select the element that you want to animate
  const textElement = document.querySelector('.animation-text');
  
  // Add a class to the element that triggers the animation
  textElement.classList.add('animate');
  
  // Set the boolean variable to true so that the animation does not run again
  animationSeen = true;
}
}

// Then, we add an event listener to the window object that will call the handleAnimation function
// when the user scrolls to a certain point on the page
window.addEventListener('scroll', handleAnimation);

$(document).ready(function() {
$(".navbar a").on("click", function() {
  $(".navbar").removeClass("open");
  $("#check").prop("checked", false);
  var target = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(target).offset().top
  }, 1000);
});
});

var player = new Video.Player('video-player', {
  playsinline: true
});

playsinline.init();


