$(document).on("ready",function(){

  $(window).scroll(function(){

    var wscroll= $(this).scroll().top;

    $(".video").css({
      " transform ":" translate 0px " + wscroll/2 + "px"
    })
    console.log("wscroll")
  });

});
