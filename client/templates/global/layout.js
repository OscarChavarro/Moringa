Template.layout.helpers({
    "mifuncion" : function() {
      console.log("Hola. Este es un código JavaScript metido dentro de un HELPER");
      var componente;
      componente = $("centralArea");
      console.log(componente);

    }

});

Template.layout.onRendered(function(){
    $(window).scroll(function(){
        if (window.location.pathname==="/") {
            var vscroll= $(this).scrollTop();
            if(vscroll>$(window).height()){
                $('.cabecera-fija').addClass('mas-fino');
                $('.logomf').removeClass('oculta-logo-fino');
                $('.logoN').addClass('oculta-logo-normal');
            }else{
                $('.cabecera-fija').removeClass('mas-fino');
                $('.logomf').addClass('oculta-logo-fino');
                $('.logoN').removeClass('oculta-logo-normal');
            }
        }

    });

    $('.btn-activa-menu').click(function(){
        $('.menu-main').toggleClass('oc-menu');
    });

    $(window).on('click', function(){

        if(window.location.pathname!=="/"){
            $('.cabecera-fija').addClass('mas-fino');
            $('.logomf').removeClass('oculta-logo-fino');
             $('.logoN').addClass('oculta-logo-normal');
        }else{
            $('.cabecera-fija').removeClass('mas-fino');
            $('.logomf').addClass('oculta-logo-fino');
            $('.logoN').removeClass('oculta-logo-normal');

        }

    });
    var sesion= true;
    var registro= true;

    $('.cierra-modal').click(function(){
        if(sesion){
            $('.cont-sesion-a').addClass("cerrar");

                setTimeout(function(){
                    $('.cont-modal-sombra').addClass('cerrar');
                },400);
            sesion= false;
        }
        if(registro){
            $('.cont-modal').addClass("cerrar");
                setTimeout(function(){
                    $('.cont-modal-sombra').addClass('cerrar');
                },400);
                registro= false;
        }
    });
    $('.sesionB').click(function(){
        $('.cont-modal-sombra').removeClass("cerrar");
            setTimeout(function(){
                $('.cont-sesion-a').removeClass('cerrar');
            },400);
            sesion= true;
    })
    $('.registrarA').click(function(){
        $('.cont-modal-sombra').removeClass("cerrar");
            setTimeout(function(){
                $('.cont-modal').removeClass('cerrar');
            },400);
            registro= true;
    })
    $('.acceda').click(function(){
        setTimeout(function(){
        $('.cont-modal').addClass('cerrar');
        registro=false;
            $('.cont-sesion-a').removeClass('cerrar');
        },400);
        sesion= true;
    });


    console.log("Esto se ejecuta tan pronto se muestra la plantilla");
});
