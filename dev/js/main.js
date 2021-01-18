$(document).ready(function () {
  // search
  $(".search button").click(function (e) {
    e.preventDefault();
    $(this).hide();
    $(this).closest(".header").find(".search-lg").slideDown(300);
  });

  // burder
  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".navmenu").slideToggle(300);
  });

  // tabs 
  $(".tabs-desk .tabs-item").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    let index = $(this).index();
    $(".content-item").eq(index).slideDown(0).siblings().slideUp(0);
  });

  // collapse 
  $(".tabs-mob .collapse-item").click(function () {
    $(this).closest(".collapse").toggleClass('active');
    $(this).closest(".collapse").find(".collapse-drop").slideToggle(300);
  });

  $(".tabs-item_main").click(function () {
    $(this).closest(".tabs-item").toggleClass('active').siblings().removeClass('active');
    $(this).siblings(".content-item").slideToggle(300).closest(".tabs-item").siblings().find(".content-item").slideUp(300);
  });
});