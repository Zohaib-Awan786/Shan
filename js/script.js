(function ($) {
  "use strict";

  // Init jarallax parallax
  const initJarallax = () => {
    jarallax(document.querySelectorAll(".jarallax"));
    jarallax(document.querySelectorAll(".jarallax-img"), {
      keepImg: true,
    });
  };

  // Input spinner
  const initProductQty = () => {
    $('.product-qty').each(function () {
      const $el = $(this);

      $el.find('.quantity-right-plus').on('click', function (e) {
        e.preventDefault();
        const quantity = parseInt($el.find('.quantity').val(), 10) || 0;
        $el.find('.quantity').val(quantity + 1);
      });

      $el.find('.quantity-left-minus').on('click', function (e) {
        e.preventDefault();
        const quantity = parseInt($el.find('.quantity').val(), 10) || 0;
        if (quantity > 0) {
          $el.find('.quantity').val(quantity - 1);
        }
      });
    });
  };

  // Init Chocolat lightbox
  const initChocolat = () => {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    });
  };

  // Animate texts (no inline styles)
  const initTextFx = () => {
    $('.txt-fx').each(function () {
      let count = 0;
      const delay = 0;
      const stagger = 10;
      const words = this.textContent.split(/\s/);
      let newstr = '';

      words.forEach((word) => {
        newstr += `<span class="word">`;
        for (let i = 0; i < word.length; i++) {
          newstr += `<span class='letter' data-delay='${delay + stagger * count}'>${word[i]}</span>`;
          count++;
        }
        newstr += `</span><span class='letter space' data-delay='${delay}'>&nbsp;</span>`;
        count++;
      });

      this.innerHTML = newstr;
    });
  };

  // On document ready
  $(document).ready(function () {
    initProductQty();
    initJarallax();
    initChocolat();
    initTextFx();

    // Search box toggle
    $(".user-items .search-item").on("click", function () {
      $(".search-box").toggleClass('active');
      $(".search-box .search-input").focus();
    });
    $(".close-button").on("click", function () {
      $(".search-box").toggleClass('active');
    });

    const breakpoint = window.matchMedia('(max-width:61.93rem)');

    if (!breakpoint.matches) {
      // Main Swiper
      const mainSwiper = new Swiper(".main-swiper", {
        slidesPerView: 1,
        spaceBetween: 48,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          900: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        },
      });

      // Homepage 2 thumbs
      const thumbSwiper = new Swiper(".thumb-swiper", {
        direction: 'horizontal',
        slidesPerView: 6,
        spaceBetween: 6,
        breakpoints: {
          900: {
            direction: 'vertical',
            spaceBetween: 6,
          },
        },
      });

      // Homepage 2 large slider
      const largeSwiper = new Swiper(".large-swiper", {
        spaceBetween: 48,
        effect: 'fade',
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        thumbs: {
          swiper: thumbSwiper,
        },
      });
    }

    // Product page thumbnails
    const thumbSlider = new Swiper(".product-thumbnail-slider", {
      slidesPerView: 5,
      spaceBetween: 10,
      direction: "vertical",
      breakpoints: {
        0: { direction: "horizontal" },
        992: { direction: "vertical" },
      },
    });

    // Product large image slider
    const largeSlider = new Swiper(".product-large-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      thumbs: {
        swiper: thumbSlider,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });

  // Preloader (modern load event)
  $(window).on('load', function () {
    $('.preloader').fadeOut();
  });

})(jQuery);
