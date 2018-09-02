$(document).ready(function () {
  $('.reviews-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 1
      }
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

});
