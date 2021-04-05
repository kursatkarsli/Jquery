$(document).ready(() => {
    const box = $(".button1");
    box.click(() => {
      $(".p1").append(" New Text Line");
    
    })
  $('.link').click(() => {
  $("ol").append("<li>New Lıst Item</li>")
      });
  });
