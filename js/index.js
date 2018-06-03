$(document).ready(function () {
    var windowActual = $('#home');
    var marcadoActual = $('.home > font');

    $('.destinos').click(function () {
        windowActual.removeClass();
        windowActual.addClass('oculto');
        marcadoActual.removeClass('marcado');
        $('#destinos').removeClass();
        $('#destinos').addClass('destinos-w');
        $('.destinos > font').addClass('marcado');
        marcadoActual = $('.destinos > font');
        windowActual = $('#destinos');
    });

    $('.home').click(function () {
        windowActual.removeClass();
        windowActual.addClass('oculto');
        marcadoActual.removeClass('marcado');
        $('#home').removeClass();
        $('#home').addClass('carousel slide');
        $('.home > font').addClass('marcado');
        marcadoActual = $('.home > font');
        windowActual = $('#home');
    });

    $('.excursiones').click(function () {
        windowActual.removeClass();
        windowActual.addClass('oculto');
        marcadoActual.removeClass('marcado');
        $('#excursiones').removeClass();
        $('#excursiones').addClass('carousel slide');
        $('.excursiones > font').addClass('marcado');
        marcadoActual = $('.excursiones > font');
        windowActual = $('#excursiones');
    });

    var $videoSrc;

    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $('#myList a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1");
    })


    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    })
});