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
// Web Development Section Slick Carousel
$(document).ready(function () {
  // Dummy data
  const showcaseData = [
    {
      title: "TripMeld CRM",
      image: "images/logos/implify-temp.png",
      link: "https://tripmeld.com/"
    },
    {
      title: "Reymould Branding",
      image: "images/logos/tripmeld-temp.png",
      link: "https://reymould.com/"
    },
    {
      title: "Sarojini Dental",
      image: "images/logos/sarojini-temp.png",
      link: "https://sarojinidental.com/"
    },
    {
      title: "Techcelerate",
      image: "images/logos/techcelerate-temp.png",
      link: "https://techcelerate.io/"
    }
  ];

  let currentIndex = 0;

  function updateShowcase() {
    const item = showcaseData[currentIndex];

    // Fade-out current image and text
    $(".webdev-image-frame img, .webdev-client-title, .webdev-link").fadeOut(300, function () {
      // Update content
      $(".webdev-client-title").text(item.title);
      $(".webdev-image-frame img").attr("src", item.image).attr("alt", item.title);
      $(".webdev-link").attr("href", item.link).text(item.link);

      // Fade-in new content
      $(".webdev-image-frame img, .webdev-client-title, .webdev-link").fadeIn(400);
    });

    // Move to next image
    currentIndex = (currentIndex + 1) % showcaseData.length;
  }

  // Initial load
  updateShowcase();

  // Change every 4 seconds
  setInterval(updateShowcase, 4000);
});


// Digital Marketing Section Slick Carousel
$(document).ready(function () {
  // Define the content for each section
  const dmData = {
    "Search Engine Optimization": {
      title: "Search Engine Optimization",
      text: "Our meticulous approach ensures your logo not only looks exceptional but also communicates your brand story effectively. Let your logo speak volumes about your brand ethos with our expert design solutions.",
      img: "images/logos/implify-temp.png",
    },
    "Social Media Marketing": {
      title: "Social Media Marketing",
      text: "We craft data-driven strategies to enhance your social presence, increase engagement, and connect with your audience effectively across all major platforms.",
      img: "images/logos/tripmeld-temp.png",
    },
    "Google Ads": {
      title: "Google Ads",
      text: "Maximize your ROI with our strategic ad campaigns, keyword targeting, and performance tracking to reach your audience at the right moment.",
      img: "images/logos/techcelerate-temp.png",
    },
    "Content Marketing": {
      title: "Content Marketing",
      text: "Our content experts create compelling, SEO-optimized stories that attract, educate, and convert your target audience.",
      img: "images/logos/sarojini-temp.png",
    }
  };

  $(document).ready(function () {
    // ===== Content data for each service =====
    const dmData = {
      "Search Engine Optimization": {
        title: "Search Engine Optimization",
        text: "Our meticulous approach ensures your logo not only looks exceptional but also communicates your brand story effectively. Let your logo speak volumes about your brand ethos with our expert design solutions.",
        img: "images/logos/implify-temp.png"
      },
      "Social Media Marketing": {
        title: "Social Media Marketing",
        text: "We craft data-driven strategies to enhance your social presence, increase engagement, and connect with your audience effectively across all major platforms.",
        img: "images/logos/tripmeld-temp.png"
      },
      "Google Ads": {
        title: "Google Ads",
        text: "Maximize your ROI with our strategic ad campaigns, keyword targeting, and performance tracking to reach your audience at the right moment.",
        img: "images/logos/techcelerate-temp.png"
      },
      "Content Marketing": {
        title: "Content Marketing",
        text: "Our content experts create compelling, SEO-optimized stories that attract, educate, and convert your target audience.",
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
        $(".dm-card-title").text(data.title);
        $(".dm-card-text").text(data.text);
        $(".dm-card-image").attr("src", data.img);
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
});