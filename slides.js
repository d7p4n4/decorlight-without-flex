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
  
    $(function () {
  
  var height = 270;
  var animationSpeed = 1500;
  var imgTime = 5000;
  var currentSlide = 1;
  
  var $slideCont = $('.neonSlideContainer');
  var $fullSlide = $slideCont.find('.neonFullSlide');
  var $slides = $fullSlide.find('.neonSlides');
  
  var interval;
  
  function neonStartSlider() {
    interval = setInterval(function() {
      $fullSlide.animate({marginTop: '-=' + height}, animationSpeed, function() {
      currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $fullSlide.css({marginTop: 0});
        };
      });
    }, imgTime);
  };
    
    neonStartSlider();
  });
  
  
    $(function () {
  
  var height = 400;
  var animationSpeed = 1500;
  var imgTime = 5000;
  var currentSlide = 1;
  
  var $slideCont = $('.laborSlideContainer');
  var $fullSlide = $slideCont.find('.laborFullSlide');
  var $slides = $fullSlide.find('.laborSlides');
  
  var interval;
  
  function laborStartSlider() {
    interval = setInterval(function() {
      $fullSlide.animate({marginTop: '-=' + height}, animationSpeed, function() {
      currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $fullSlide.css({marginTop: 0});
        };
      });
    }, imgTime);
  };
    
    laborStartSlider();
  });
  
     $(function () {
  
  var height = 270;
  var animationSpeed = 1500;
  var imgTime = 5000;
  var currentSlide = 1;
  
  var $slideCont = $('.diszSlideContainer');
  var $fullSlide = $slideCont.find('.diszFullSlide');
  var $slides = $fullSlide.find('.diszSlides');
  
  var interval;
  
  function diszStartSlider() {
    interval = setInterval(function() {
      $fullSlide.animate({marginTop: '-=' + height}, animationSpeed, function() {
      currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $fullSlide.css({marginTop: 0});
        };
      });
    }, imgTime);
  };
    
    diszStartSlider();
  });
  
    var num = 1;
    
    $('.termekek').on('click', function() { 
      
      if (num == 1) {
        $('.termek').slideDown(300, function() {
          $(this).addClass('termekActive'); 
        })
        num++;
      } else {
              
        $('.termek').slideUp(300, function() {
          $(this).removeClass('termekActive'); 
        })
        num--;
      }
    });
  
}

  
