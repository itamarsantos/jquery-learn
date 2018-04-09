$(function(){
    // Auxilia também
    /*$('button').hover(function(){
        $(this).addClass('fundovermelho');
    }, function(){
        $(this).removeClass('fundovermelho');
    });*/

    // Forma simplificada que auxilia
    $('button').hover(function(){
        $(this).toggleClass('fundovermelho');
    });
});
