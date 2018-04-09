$(function(){
    /*$('button').click(function(){
        if ($(this).hasClass('fundovermelho')){
            $(this).removeClass('fundovermelho');
        } else {
            $(this).addClass('fundovermelho');
        }
    });*/

    // O controle if acima, é substituível por toogleClass
    /*$('button').click(function(){
        $(this).toggleClass('fundovermelho');
    });*/

    $('button').mouseover(function(){
        $(this).addClass('fundovermelho');
    });

    $('button').mouseout(function(){
        $(this).removeClass('fundovermelho');
    });
});
