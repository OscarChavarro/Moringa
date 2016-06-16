Template.layout.helpers({
    "mifuncion" : function() {
      console.log("Hola. Este es un código JavaScript metido dentro de un HELPER");
      var componente;
      componente = $("centralArea");
      console.log(componente);
      var routeName = Router.current().route.getName();
      if(routeName!=='/'){
          $('.cabecera-fija').addClass('mas-fino');
          $('.logomf').removeClass('oculta-logo-fino');
          $('.logoN').addClass('oculta-logo-normal');
      }
      if(routeName==='/'){
          $('.cabecera-fija').removeClass('mas-fino');
          $('.logomf').addClass('oculta-logo-fino');
          $('.logoN').removeClass('oculta-logo-normal');
      }
    }

});

Template.layout.onRendered(function(){
    $(window).scroll(function(){
        if (window.location.pathname==="/") {
            var vh= $(window).height();
            var vscroll= $(this).scrollTop();
            var letras= $('.letras-ani').offset().top;
            if(vscroll>$(window).height()){
                $('.cabecera-fija').addClass('mas-fino');
                $('.logomf').removeClass('oculta-logo-fino');
                $('.logoN').addClass('oculta-logo-normal');
            }else{
                $('.cabecera-fija').removeClass('mas-fino');
                $('.logomf').addClass('oculta-logo-fino');
                $('.logoN').removeClass('oculta-logo-normal');

            }
            if(vscroll> letras-vh){
                $('.letras-ani').removeClass('oculta-letras');
            }
        }
    })

    $('.btn-activa-menu').click(function(){
        $('.menu-main').toggleClass('oc-menu');
    });

    // if(window.location.pathname!=="/"){
    //     $('.cabecera-fija').addClass('mas-fino');
    //     $('.logomf').removeClass('oculta-logo-fino');
    //      $('.logoN').addClass('oculta-logo-normal');
    // }else{
    //     $('.cabecera-fija').removeClass('mas-fino');
    //     $('.logomf').addClass('oculta-logo-fino');
    //     $('.logoN').removeClass('oculta-logo-normal');
    //
    // }


    var sesion= false;
    var registro= false;

    $('.cierra-modal').click(function(){
        if(sesion){
            $('.cont-sesion-a').addClass("cerrar3");
                setTimeout(function(){
                    $('.cont-modal-sombra').addClass('cerrar');
                },500);
            sesion= false;
        }
        if(registro){
            $('.cont-modal').addClass("cerrar2");
                setTimeout(function(){
                    $('.cont-modal-sombra').addClass('cerrar');
                },400);
                registro= false;
        }
    });
    $('.sesionB').click(function(){
        $('.cont-modal-sombra').removeClass("cerrar");
            setTimeout(function(){
                $('.cont-sesion-a').removeClass('cerrar3');
            },500);
            sesion= true;
    })
    $('.registrarA').click(function(){
        $('.cont-modal-sombra').removeClass("cerrar");
            setTimeout(function(){
                $('.cont-modal').removeClass('cerrar2');
            },400);
            registro= true;
    })
    $('.acceda').click(function(){
        setTimeout(function(){
        $('.cont-modal').addClass('cerrar2');
        registro=false;
            $('.cont-sesion-a').removeClass('cerrar3');
        },600);
        sesion= true;
    });
    var typeA=false;
    var typeB=false;
    $('.r01').on('change',function(){
        if(typeB){
            $('.tipodecuenta-b').addClass('ocultar-tipodeC');
            typeB= false;
            $('.tipodecuenta-a').removeClass('ocultar-tipodeC');
            typeA= true;
        }else {
            typeA=true;
            $('.tipodecuenta-a').removeClass('ocultar-tipodeC');
        }

    })
    $('.r03').on('change',function(){
        if(typeA){
            $('.tipodecuenta-a').addClass('ocultar-tipodeC');
            typeA=false;
            $('.tipodecuenta-b').removeClass('ocultar-tipodeC');
            typeB=true;
        }
        else{
            $('.tipodecuenta-b').removeClass('ocultar-tipodeC');
            typeB=true;
        }

    })



});
console.log("Esto se ejecuta tan pronto se muestra la plantilla");
