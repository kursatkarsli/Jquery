$(document).ready(function () {
    $("p").mouseenter(function () {
        $("p").css("background-color", "pink")
    })
    $("p").mouseleave(function () {
        $("p").css("background-color", "red")
    })
    $("p").click(function () {
        $("p").css("background-color", "gold")
    })
});