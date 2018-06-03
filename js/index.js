$(document).ready(function () {
    var windowActual = $('#home');
    var marcadoActual = $('.home > font');
    var estadoBoton = "rp";

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

    $('.reservas').click(function () {
        windowActual.removeClass();
        windowActual.addClass('oculto');
        marcadoActual.removeClass('marcado');
        $('#reservas').removeClass();
        $('#reservas').addClass('carousel slide paramenos');
        $('.reservas > font').addClass('marcado');
        marcadoActual = $('.reservas > font');
        windowActual = $('#reservas');
    });

    $("#type").change(function () {
        var val = $(this).val();
        if (val == "d_gc") {
            $("#size").html("<option value='ac'>Avistamiento de cetáceos</option><option value='gcda'>Gran Canaria desde el aire</option><option value='dpgcda'>Descubre el pequeño gran continente desde el aire</option><option value='sbv'>Senderismo en Bandama y vinos</option>");
        } else if (val == "d_t") {
            $("#size").html("<option value='ct'>Las cañadas del Teide</option>");
        } else if (val == "d_f") {
            $("#size").html("<option value='ail'>Aventura en Isla de Lobos</option>");
        } else if (val == "d_l") {
            $("#size").html("<option value='gtl'>Gran Tour de Lanzarote</option>");
        } else if (val == "d_g") {
            $("#size").html("<option value='vi'>Vuelta a la isla</option>");
        } else if (val == "d_p") {
            $("#size").html("<option value='gtl'>Senderismo en el Bosque Encantado</option>");
        } else if (val == "d_h") {
            $("#size").html("<option value='tih'>Tour isla de El Hierro</option>");
        }
    });

    $(".pago").click(function () {
            $("#para-reservar").addClass('oculto');
            $("#para-pagar").removeClass('oculto');
            $(this).text('PAGAR');
            estadoBoton = "pr";
            $("#reservas").addClass('paramas');
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