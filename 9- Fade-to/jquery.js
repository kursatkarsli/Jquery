$(document).ready(() => {
    
    $("#b1").click(() => {
        $(".box").fadeToggle(4000)
    });
    $('#b2').click(() => {
        $(".box-1").fadeTo(1000, 0.20);
        $(".box-2").fadeTo(1500, 0.40);
        $(".box-3").fadeTo(2000, 0.60);
        $(".box-4").fadeTo(2500, 0.80);
        $(".box-5").fadeTo(3000, 0.95);

    })
});