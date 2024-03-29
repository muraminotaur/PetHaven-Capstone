$(document).ready(function (){
    
  // Main Menu 
    $('#menu').slicknav({
    });
    
    $('.testislider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    $('.slidershowcase').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
     // hide our element on page load
      $('.hideanimate').css('opacity', 0);
    
    //fade in effects 
    
    $('.textfade').waypoint(function() {
          $('.textfade').addClass('fadeIn');
      }, { offset: '80%' });
    
     $('.textleft').waypoint(function() {
          $('.textleft').addClass('fadeInLeft');
      }, { offset: '80%' });
    
     $('.textright').waypoint(function() {
          $('.textright').addClass('fadeInRight');
      }, { offset: '80%' });
    
     $('.rowleftright').waypoint(function() {
          $('.rowleftright').addClass('fadeInLeft');
      }, { offset: '80%' });
    
     $('.rowrightleft').waypoint(function() {
          $('.rowrightleft').addClass('fadeInRight');
      }, { offset: '80%' });
    
      $('.rowleftright2').waypoint(function() {
          $('.rowleftright2').addClass('fadeInLeft');
      }, { offset: '80%' });
    
    
});