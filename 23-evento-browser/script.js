$(function(){
    // Funcionalidade de evento do scroll
    $('#div').bind('scroll', function() {
        console.log('Scroll log'); // Incrementa quantidade de scroll dado pelo user
        $(this).css('background-color', 'green');
    });

    // Funcionalidade de resize,
    $(window).bind('resize', function() {
        console.log('Resized');
    });
});
