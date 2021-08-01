/*Invocamos las funciones de owl para el carousel de img*/
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
/*usamos jquery para evento click para lo del menú
alternativa al menú hamburguesa visto en clases
y no usamos el cierre automatico del menú*/ 
$('.menu-icon').click(function () {

    $('header nav').slideToggle();
    /*slideToggle oculta y muestra */

})