$(document).ready(function() {

  // ===== Fade-in Animation on Scroll =====
  $(window).on('scroll', function() {
    $('.fade-in, .design-services-container, .brand-section, .digital-marketing-wrapper, .webdev-section').each(function() {
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
  $('.tab-btn').click(function() {
    var filter = $(this).attr('data-filter');

    // Remove 'active' class from all, add to clicked one
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    // Hide all sections first
    $('.service-box, .design-services-container, .brand-section, .digital-marketing-wrapper, .webdev-section').hide();

    // ===== Show Section Based on Tab =====
    switch(filter) {
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
