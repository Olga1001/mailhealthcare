$(document).ready(function () {
  // burder
  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".navmenu").slideToggle(300);
  });

  // tabs 
  if (window.matchMedia("(max-width: 575px)").matches) { 
    $(".content-item").removeClass('active');
  }
  $(".tabs-item").click(function () { 
    if (window.matchMedia("(min-width: 576px)").matches) {
      $(".tabs-item").removeClass('active');
      $('[data-content]').removeClass('active');
    }
  
    $(this).toggleClass('active');
    let i = $(this).data("tab"); 
    $('[data-content="'+ i +'"]').toggleClass('active');
  });
 
  if (window.matchMedia("(max-width: 991px)").matches) {
    // collapse 
    $(".collapse-item").click(function () {
      $(this).closest(".collapse").toggleClass('active');
      $(this).closest(".collapse").find(".collapse-drop").slideToggle(300);
    });

    // search
    $(".header .search button").click(function (e) {
      e.preventDefault();
      $(this).hide();
      $(this).closest(".header").find(".search-lg").slideDown(300);
    });
  }

  if (window.matchMedia("(max-width: 767px)").matches) {
    $(".search-price input").attr("placeholder","Type your drug name");
  }

  // onload
  window.onload = function () {
    $("body").addClass('skeleton');
    window.setTimeout(function () {
        $("body").removeClass('skeleton');
        $("div").removeClass('skeleton-hide');
    }, 1000);
  };
 
});