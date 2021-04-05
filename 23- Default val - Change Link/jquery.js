$(document).ready(() => {
    const box = $(".button1");
    box.click(() => {
      $(".p1").text("New Text Line");
      $(".p2").html("<p><b>New Html Line</b></p>");
      $("input").val("Default Value");
    })
  $('.link').click(() => {
    $("a").text("www.google.com");
    $("a").attr("href","https://www.google.com")
      });
  });
