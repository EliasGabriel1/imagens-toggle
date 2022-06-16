function Temporizador(initiate) {
    if (initiate !== true) {
        $(".first").toggleClass("none");
        $(".second").toggleClass("block");
    }
    setTimeout(Temporizador, 8000);
}

function Temporizador2(initiate) {
    if (initiate !== true) {
        $(".first2").toggleClass("none");
        $(".second2").toggleClass("block");
    }
    setTimeout(Temporizador2, 4000);
}

$(function () {
    Temporizador2(true);
    Temporizador(true);
});
