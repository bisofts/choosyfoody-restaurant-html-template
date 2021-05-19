$(function ($) {

  "use strict"; 

  /*---------------------------
        STICKY MENU JS
  -----------------------------*/
  var $location = $(".cf-nav").offset().top;  
  $(window).scroll(function(){     
    var $scrolling = $(this).scrollTop();    
    if($scrolling >= $location){        
      $(".cf-nav").addClass("cf-nav-sticky");
      document.getElementById("logo").style.width = "90px";              
    }
    else {
      $(".cf-nav").removeClass("cf-nav-sticky");
      document.getElementById("logo").style.width = "120px";      
    }
  });   

  /*---------------------------
        NAVBAR COLLAPSE HIDE 
  -----------------------------*/
  $('.navbar-nav>li').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  }); 

  /*---------------------------
        SMOOTH SCROLL
  -----------------------------*/
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000, 'linear');
    });

  /*---------------------------
        SLIDER PART JS
  -----------------------------*/
  $('.cf-slider').slick({    
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    pauseOnHover: false,
    autoplay: true,
    speed: 1000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        }
      }
    ]
  });

  $('.left').click(function () {
    $('.cf-slider').slick('slickPrev');
  })

  $('.right').click(function () {
    $('.cf-slider').slick('slickNext');
  })

  /*--------------------
        PARALLAX JS
  --------------------*/
  var foreground = new Rellax('.fg-parallax', {
    speed: 7,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });  

  var background = new Rellax('.bg-parallax', {
    speed: 3,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

  /*---------------------------
        FILTER ISOTOPE JS
  -----------------------------*/  
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  }); 

  // bind filter button click
  $('.filters-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');  
    $grid.isotope({
      filter: filterValue
    });
  });

  // To color filter active buttons on click
  $('.button').on('click', function(){  
    $('.button').removeClass('active');
    $(this).addClass('active');
  });

  /*--------------------------------
        TESTIMONIAL SLIDER SLICK JS
  --------------------------------*/
  $('.cf-testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    pauseOnHover: false,
    autoplay: true,
    speed: 1000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        }
      }
    ]
  });

  $('.testimonial-left').click(function () {
    $('.cf-testimonial-slider').slick('slickPrev');
  })

  $('.testimonial-right').click(function () {
    $('.cf-testimonial-slider').slick('slickNext');
  }) 
  
  /*--------------------------------
        DATE PICKER JS
  --------------------------------*/
  $('#datetimepicker4').datetimepicker({
    format: 'DD-MMM-YYYY'
  });

  $('#datetimepicker3').datetimepicker({
    format: 'LT',
    icons: {
      time: "fa fa-clock-o",
      date: "fa fa-calendar",
      up: "fas fa-chevron-up",
      down: "fa fa-chevron-down"
    }
  });

  /*--------------------------------   
        INPUT TOOLTIP   
  --------------------------------*/
  $('#datePicker').tooltip({
    'trigger': 'hover',
    'placement': 'right',
    'title': 'Click the icon for calendar'
  });
 
  $('#timePicker').tooltip({
    'trigger': 'hover',
    'placement': 'right',
    'title': 'Click the icon for time'
  });

  /*-------------------------------------   
    TEXT AREA IN ALL FORMS AUTO RESIZE   
  -------------------------------------*/
  $('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
  
  /*--------------------------------------- 
        MENU PAGE LINK ACTIVE CLASS
  ----------------------------------------*/
  // To color manu page active buttons on click
  $('.page-links').on('click', function () {
    $('.page-links').removeClass('active');
    $(this).addClass('active');
  });

  /*--------------------------------
            PRE LOADER
  ---------------------------------*/
  $(window).load(function () {
    $('.preloader').fadeOut('slow');
  });

})