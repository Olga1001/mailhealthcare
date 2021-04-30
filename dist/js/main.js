"use strict";

$(document).ready(function () {
  // burder
  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".navmenu").slideToggle(300);
  }); // tabs 

  if (window.matchMedia("(max-width: 575px)").matches) {
    $(".content-item").removeClass('active');
  }

  $(".tabs-item").click(function () {
    if (window.matchMedia("(min-width: 576px)").matches) {
      $(".tabs-item").removeClass('active');
      $('[data-content]').removeClass('active');
    }

    $(this).toggleClass('active');
    var i = $(this).data("tab");
    $('[data-content="' + i + '"]').toggleClass('active');
  });

  if (window.matchMedia("(max-width: 991px)").matches) {
    // collapse 
    $(".collapse-item").click(function () {
      $(this).closest(".collapse").toggleClass('active');
      $(this).closest(".collapse").find(".collapse-drop").slideToggle(300);
    }); // search

    $(".header .search button").click(function (e) {
      e.preventDefault();
      $(this).hide();
      $(this).closest(".header").find(".search-xl").slideDown(300);
    });
  }

  if (window.matchMedia("(max-width: 767px)").matches) {
    $(".search-price input").attr("placeholder", "Type your drug name");
  } // onload


  window.onload = function () {
    window.setTimeout(function () {
      // $(".skeleton").remove();
      $(".skeleton").hide(); 
      $(".skeleton-local-2").hide();
      $(".skeleton-hide").removeClass('skeleton-hide');
      window.setTimeout(function () {
        $(".skeleton-local-1").hide();
        $(".content-item").removeClass('hide');
      }, 2000);
    }, 1000);
  }; // open popups


  $('[data-open-popup]').click(function () {
    var attrItem = $(this).data("open-popup");
    $('[data-popup="' + attrItem + '"]').addClass('active');
  });
  $('.stopPropagation').click(function (e) {
    e.stopPropagation();
  }); // close popupы and pause video

  $('.popup, .close').click(function () {
    $('[data-popup]').removeClass('active');
    $(".video").trigger('pause');
  }); // autoplay video on click

  $('.btn-play').click(function () {
    $(".video").trigger('play');
  });
});