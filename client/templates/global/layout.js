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
        var vscroll= $(this).scrollTop();
        if(vscroll>$(window).height()){
            $('.cabecera-fija').addClass('mas-fino');
            $('.logo img').addClass('mas-fino-img');
        }else{
            $('.cabecera-fija').removeClass('mas-fino');
            $('.logo img').removeClass('mas-fino-img');
        }
    });
    $('.btn-activa-menu').click(function(){
        $('.menu-main').toggleClass('oc-menu');
    });
    console.log("Esto se ejecuta tan pronto se muestra la plantilla");
});
