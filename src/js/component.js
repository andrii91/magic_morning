$(document).ready(function () {
  $('.reviews-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    responsive: {
      0: {
        nav: false

      },
      1000: {
        nav: true
      },
    }
  })

  var owl_block = $('.owl_block-carousel');
  owl_block.owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  owl_block.on('changed.owl.carousel', function (event) {
    var index = event.item.index;

    if (index == 7) {
      index = event.item.count + 7;
    }

    $('.owl_block-nav .count').text(event.item.count);
    $('.owl_block-nav .active').text((index - 7));

  });


  $('.owl_block-nav .right').click(function () {
    owl_block.trigger('next.owl.carousel');
  })
  $('.owl_block-nav .left').click(function () {
    owl_block.trigger('prev.owl.carousel');
  })

  var r_video = $('.r_video-carousel');
  r_video.owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
      0: {
        items: 1
      }
    }
  });

  r_video.on('changed.owl.carousel', function (event) {
    var index = event.item.index;

    if (index == 2) {
      index = event.item.count + 2;
    }

    $('.r_video-nav .count').text(event.item.count);
    $('.r_video-nav .active').text((index - 2));

  });


  $('.r_video-nav .right').click(function () {
    r_video.trigger('next.owl.carousel');
  })
  $('.r_video-nav .left').click(function () {
    r_video.trigger('prev.owl.carousel');
  })


  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 60
    }, 1500);

  });

  $('.mob-btn').click(function () {
    $('.menu').slideToggle(200);
  });

  if ($(window).width() < 1200) {
    $('.menu li').click(function () {
      $('.menu').slideUp(200);
    })
  }
  $(window).resize(function () {
    if ($(window).width() < 1200) {
      $('.menu li a').click(function () {
        $('.menu').slideUp(200);
      })
    }
  })
});