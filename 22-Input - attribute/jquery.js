$(document).ready(() => {
  $((() => {
    const box = $(".button1");
    box.click(() => {
        alert($("input").val() + " name attribute of input box is "+ $("input").attr("name"))
    })


 
  }))
});