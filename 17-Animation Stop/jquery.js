$(document).ready(() => {
  $(".button1").click(() => {
    const box = $(".box");
    box.animate(
      { top: "200px", opacity: 0.2, height: "+=20px", width: "+=20px" },
      4000
    );
    box.animate(
      { left: "200px", opacity: 0.4, height: "+=20px", width: "+=20px" },
      4000
    );
    box.animate(
      { top: "40px", opacity: 0.6, height: "-=20px", width: "-=20px" },
      4000
    );
    box.animate(
      { left: "5px", opacity: 0.8, height: "-=20px", width: "-=20px" },
      4000
    );
  });
  $(".button2").click(() => {
    $(".box").stop(true);/*clearQueue, JumptoEnd*/ 
  })
});
