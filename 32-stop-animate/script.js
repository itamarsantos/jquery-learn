$(function(){
    $('#btn').bind('click', function() {
        $('.div').animate({
            'margin-left':500
        }, 2000);
    });

    $('#btn2').bind('click', function() {
        $('.div').stop(); // Dá pause na animação em andamento
    });
});
