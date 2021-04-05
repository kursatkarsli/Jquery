$(document).ready(function () {
    $("p").on({
        mouseenter: () => {
            $("p").css("color", "#c6538c")
        },
        mouseleave: () => {
            $("p").css("background-color", "rgba(152,125,455,246)")
        },
        click: () => {
            $("p").css("background-color", "gold")

        }
        

    })
});