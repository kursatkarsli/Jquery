$(document).ready(() => {
  
  $('.link').click(() => {
  $("li").toggleClass("big")
  });
  $('.remove').click(() => {
    $("li").toggleClass("small")
        });
  });