$(function(){
    $('#btn').bind('click', function() {
        $('.div').animate({
            'margin-left':'+=50' // Aplica mesmo efeito incrementando propriedade
        }, 100);
    });
    $('#btn2').bind('click', function() {
        $('.div').animate({
            'margin-left':'-=50' // Aplica mesmo efeito incrementando propriedade
        }, 100);
    });
});
