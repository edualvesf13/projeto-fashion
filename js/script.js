    var link = $(".menu a");
    var subir = $(".img-btn");


    link.on("click", function(){
        var seletor = $(this).attr("href");
        var posicao = $(seletor).offset().top;
        $("html, body").animate({scrollTop: posicao-110},1000);
    });

    subir.on("click", function(){
        $("html, body").animate({scrollTop:0},500);
    });