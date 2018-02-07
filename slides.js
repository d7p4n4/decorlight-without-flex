window.onload = function() {
  
  $(function () {
  
  var width = 720;
  var animationSpeed = 1500;
  var imgTime = 5000;
  var currentSlide = 1;
  
  var $slideCont = $('.slideContainer');
  var $fullSlide = $slideCont.find('.fullSlide');
  var $slides = $fullSlide.find('.slides');
  
  var interval;
  
  function startSlider() {
    interval = setInterval(function() {
      $fullSlide.animate({marginLeft: '-=' + width}, animationSpeed, function() {
      currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $fullSlide.css({marginLeft: 0});
        };
      });
    }, imgTime);
  };
    
    startSlider();
  });
    }