function Temporizador(initiate) {
    if (initiate !== true) {
        $("#first").toggleClass("none");
        $("#second").toggleClass("block");
    }
    setTimeout(Temporizador, 5000);
}

$(function () {
    Temporizador(true);
});
