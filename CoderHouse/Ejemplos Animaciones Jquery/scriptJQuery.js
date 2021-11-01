
 $(document).ready(function(){
     console.log("JQuery y la web cargados 33...")

    
 //Defino todas las variables globales que necesito para trabajar con el DOM

 let botonConfirmar = $("#btnSubmit");
 let botonToggle = $("#btnToggle");
 let pFade = $("#mensajeFadeIn");
 let pSlide = $("#mensajeSlideDown");
 let pToggle = $("#mensajeToggle");

// Defino los Eventos de elementos

//cuando doy click en boton muestro los parrafos
botonConfirmar.click(function(){
    $("#mensajeShow").show();
    pFade.show();
    pSlide.show();
});

//cuando doy click en parrafo FadeIn lo oculta y despues lo muestra nuevamente
pFade.click(function(){
pFade.fadeOut("slow", function(){
  pFade.fadeIn(1000);
  });
 });

//cuando doy click en parrafo SlideDown lo oculta y despues lo muestra nuevamente
pSlide.click(function(){
  pSlide.slideUp("fast")
   });
   
botonToggle.click(() => {
   pToggle.toggle("fast");
    });

});