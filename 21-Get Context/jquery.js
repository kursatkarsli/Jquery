$(document).ready(() => {
  $((() => {
    const box = $(".button1");
    const box2 = $(".button2");
    box.click(() => {
        alert($("p").text())
    })
    box2.click(() => {
      alert($("p").html())
    })

 
  }))
});