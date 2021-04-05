
$(document).ready(() => {
  $("button").click(() => {
    $(".box").animate({ left: "800px", opacity:0.2, height:"+=200px", width:"+=200px"}, 4000);
  });
});
