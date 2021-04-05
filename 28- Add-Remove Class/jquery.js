$(document).ready(() => {
  
  $('.link').click(() => {
  $("li").addClass("big")
  });
  $('.remove').click(() => {
    $("li").removeClass("big")
        });
  });