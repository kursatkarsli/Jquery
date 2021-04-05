$(document).ready(() => {
    const box = $(".button1");
    box.click(() => {
      $(".p1").after("After New Text Line");
    
    })
  $('.link').click(() => {
  $("ol").before("<li> Before New Lıst Item</li>")
      });
  });
