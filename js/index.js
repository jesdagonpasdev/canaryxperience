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


    //
    /*var url = $("#cartoonVideo").attr('src');
    var tituloModal = $('.modal-title');

    Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing 
    $("#myModal").on('hide.bs.modal', function () {
        $("#cartoonVideo").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again 
    $("#myModal").on('show.bs.modal', function () {
        let idClick = $(this).attr('id');
        console.log(idClick);
        let titulo = "";

        switch (idClick) {
            case 'video-tenerife':
                url = "//www.youtube.com/watch?v=kwlFC6thEZU";
                titulo = "Tenerife";
                break;
            case 'video-gomera':
                url = "//www.youtube.com/watch?v=YwGHmiEM1ro";
                titulo = "La Gomera";
                break;
            case 'video-palma':
                url = "//www.youtube.com/watch?v=nhAdmuJqYZ8";
                titulo = "La Palma";
                break;
            case 'video-hierro':
                url = "//www.youtube.com/watch?v=1DlgGEqGyTg";
                titulo = "El Hierro";
                break;
            case 'video-grancanaria':
                url = "//www.youtube.com/watch?v=vPm91BmbfmU";
                titulo = "Gran Canaria";
                break;
            case 'video-lanzarote':
                url = "//www.youtube.com/watch?v=kdUaMvpweYc";
                titulo = "Lanzarote";
                break;
            case 'video-fuerteventura':
                url = "//www.youtube.com/watch?v=LFZ7425Th6U";
                titulo = "Fuerteventura";
                break;
        }

        $("#cartoonVideo").attr('src', url);
        tituloModal.text(titulo);
    });
*/
    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);



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