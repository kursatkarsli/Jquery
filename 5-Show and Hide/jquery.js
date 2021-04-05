$(document).ready(function () {
    $("#p1").mouseenter(() => {
        $("#p1").hide(1000);
    })
    $("#p2").mouseenter(() => {
        $("#p1").show(1000);//Ne Kadar Sürede Görünüp Kaybolacağı 
    })
    })