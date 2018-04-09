$(function(){
    $('button').bind('click', function(){
        $('.div').load('teste.html'); // Carregar página pelo ajax, forma mais simples
        // $.get('teste.html', function(t){
        //     $('.div').html(t);
        // });
    });
});
