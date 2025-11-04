$(document).ready(function () {

  // ===== Fade-in Animation on Scroll =====
  $(window).on('scroll', function () {
    $('.fade-in, .design-services-container, .brand-section, .digital-marketing-wrapper, .webdev-section').each(function () {
      var top = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll + windowHeight > top + 100) {
        $(this).addClass('visible');
      }
    });
  });

  // ===== Default State =====
  // Show service boxes by default, hide all overview sections
  $('.service-box').show();
  $('.design-services-container, .brand-section, .digital-marketing-wrapper, .webdev-section').hide();

  // ===== Tab Button Functionality =====
  $('.tab-btn').click(function () {
    var filter = $(this).attr('data-filter');

    // Remove 'active' class from all, add to clicked one
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    // Hide all sections first
    $('.service-box, .design-services-container, .brand-section, .digital-marketing-wrapper, .webdev-section').hide();

    // ===== Show Section Based on Tab =====
    switch (filter) {
      case 'all':
        $('.service-box').fadeIn(500);
        break;
      case 'design':
        $('.design-services-container').fadeIn(500);
        break;
      case 'brand':
        $('.brand-section').fadeIn(500);
        break;
      case 'digital':
        $('.digital-marketing-wrapper').fadeIn(500);
        break;
      case 'web':
        $('.webdev-section').fadeIn(500);
        break;
    }
  });

  // ===== "Know More" Click Navigation =====
  $('.service-box .learn-more').click(function (e) {
    e.preventDefault(); // Prevent default link behavior

    var parentBox = $(this).closest('.service-box');

    if (parentBox.hasClass('design')) {
      $('.tab-btn[data-filter="design"]').click();
      $('html, body').animate({
        scrollTop: $('.design-services-container').offset().top - 100
      }, 600);
    } else if (parentBox.hasClass('brand')) {
      $('.tab-btn[data-filter="brand"]').click();
      $('html, body').animate({
        scrollTop: $('.brand-section').offset().top - 100
      }, 600);
    } else if (parentBox.hasClass('digital')) {
      $('.tab-btn[data-filter="digital"]').click();
      $('html, body').animate({
        scrollTop: $('.digital-marketing-wrapper').offset().top - 100
      }, 600);
    } else if (parentBox.hasClass('web')) {
      $('.tab-btn[data-filter="web"]').click();
      $('html, body').animate({
        scrollTop: $('.webdev-section').offset().top - 100
      }, 600);
    }
  });

});

// Service PAGE Templates Slick Carousel.
$(document).ready(function () {
  $('.templates-carousel').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px'
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.brochure-carousel').slick({
    vertical: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    infinite: true,
    speed: 1000,
    cssEase: 'ease-in-out'
  });

  $('.brand-guideline-carousel').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    infinite: true,
    speed: 1000,
    cssEase: 'ease-in-out',
    // rtl: true
  });

  $('.creative-design-carousel').slick({
    // vertical: true,
    slidesToShow: 1,
    // slidesToScroll: -1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    infinite: true,
    speed: 1000,
    cssEase: 'ease-in-out'
  });
});

// Brand Section Slick Carousel
$(document).ready(function () {
  $(".brand-case-carousel").slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 800,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    adaptiveHeight: false,
    fade: false
  });
});
// Web Development Section Auto-Rotate Showcase
$(document).ready(function () {
  // Showcase data
  const showcaseData = [
    {
      title: "TripMeld CRM",
      img: "images/logos/tripmeld-temp.png",
      link: "https://tripmeld.com/"
    },
    {
      title: "Reymould Branding",
      img: "images/logos/implify-temp.png",
      link: "https://reymould.com/"
    },
    {
      title: "Sarojini Dental",
      img: "images/logos/sarojini-temp.png",
      link: "https://sarojinidental.com/"
    },
    {
      title: "Techcelerate",
      img: "images/logos/sarojini-temp.png",
      link: "https://techcelerate.io/"
    }
  ];

  let currentIndex = 0;
  const $images = $('#laptop-screen img');
  const totalImages = showcaseData.length;

  function updateShowcase() {
    const item = showcaseData[currentIndex];

    // Update the image src before fading
    const $currentImg = $images.filter('.active');
    const $nextImg = $images.eq(currentIndex);

    // Set the correct image source from showcaseData
    $nextImg.attr('src', item.img);

    // Fade out text
    $('#webdev-client-title, #webdev-dynamic-link').fadeOut(300, function () {
      $('#webdev-client-title').text(item.title);
      $('#webdev-dynamic-link').attr('href', item.link).text(item.link);
      $('#webdev-client-title, #webdev-dynamic-link').fadeIn(400);
    });

    // Fade out current image
    $currentImg.fadeOut(400, function () {
      $currentImg.removeClass('active');
      $nextImg.addClass('active').fadeIn(500);
    });

    // Move to next index
    currentIndex = (currentIndex + 1) % totalImages;
  }


  // Start auto-rotation after 3 seconds
  setTimeout(function () {
    setInterval(updateShowcase, 4000);
  }, 3000);
});

// Digital Marketing Section Slick Carousel
$(document).ready(function () {
  // ===== Content data for each service =====
  const dmData = {
    "Search Engine Optimization": {
      title: "Search Engine Optimization",
      text: "With our expert SEO strategies, your business will rise above the competition and reach the right audience at the right time. By optimizing your website structure, content, and keywords, we ensure higher search rankings, consistent organic traffic, and measurable results. Every effort is focused on growing your brand visibility and turning online searches into real business opportunities",
      img: "images/logos/implify-temp.png"
    },
    "Social Media Marketing": {
      title: "Social Media Marketing",
      text: "Through creative and data-driven social media campaigns, we will grow your business by building meaningful connections with your audience. From engaging reels and posts to strategic community-building, we increase your brand awareness, foster trust, and turn followers into loyal customers. Our approach ensures every interaction contributes to your long-term growth",
      img: "images/logos/tripmeld-temp.png"
    },
    "Google Ads": {
      title: "Google Ads",
      text: "We will accelerate your business growth with targeted Google Ads campaigns that reach potential customers instantly. By leveraging precise audience targeting, A/B testing, and continuous optimization, we maximize every ad rupee and generate high-quality leads. Our performance-focused strategies ensure clicks translate into conversions and real business results",
      img: "images/logos/techcelerate-temp.png"
    },
    "Content Marketing": {
      title: "Content Marketing",
      text: "Through compelling and valuable content, we will grow your business by strengthening your brand authority and engaging your audience. Whether it’s blogs, visuals, or storytelling, we craft content that informs, inspires, and converts. Our content marketing approach ensures your brand stays memorable while driving tangible growth and customer action",
      img: "images/logos/sarojini-temp.png"
    }
  };

  let currentIndex = 0;
  const items = $(".dm-service-item");
  const totalItems = items.length;
  let autoPlay;

  // ===== Function to update right-side content =====
  function updateRightContent(serviceName) {
    const data = dmData[serviceName];
    if (data) {
      $(".dm-card").removeClass("show"); // reset animation
      $(".dm-card-title").text(data.title);
      $(".dm-card-text").text(data.text);
      $(".dm-card-image").attr("src", data.img);
      setTimeout(() => $(".dm-card").addClass("show"), 50); // trigger slide-up
    }
  }


  // ===== Highlight & update content by index =====
  function showItemByIndex(index) {
    const selectedItem = $(items[index]);
    $(".dm-service-item").removeClass("active");
    selectedItem.addClass("active");
    const serviceName = selectedItem.text().replace("• ", "");
    updateRightContent(serviceName);
  }

  // ===== Auto-play loop =====
  function startAutoPlay() {
    autoPlay = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      showItemByIndex(currentIndex);
    }, 3000); // 3 seconds
  }

  function stopAutoPlay() {
    clearInterval(autoPlay);
  }

  // ===== Manual click =====
  items.on("click", function () {
    stopAutoPlay(); // Pause autoplay temporarily
    currentIndex = $(this).index();
    showItemByIndex(currentIndex);
    startAutoPlay(); // Restart autoplay
  });

  // ===== Initialize first item and start autoplay =====
  showItemByIndex(0);
  startAutoPlay();
});
