type="text/javascript">

$('.works-slideshow .team-item').each(function() {
  var slider = $(this);
  slider.slick({
     arrows: false,
     dots: false,
     accessibility: false,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 3000,
     slidesToShow: 3,
     slidesToScroll: 1,
     responsive: [{
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
  });
 
  var sLightbox = $(this);
  sLightbox.slickLightbox({
     src: 'src',
     itemSelector: '.team-image img',
     caption: 'text'
  });
 });
 