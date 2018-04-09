$(function(){
    $('#btn1').bind('click', function(){
        $('#btn2').trigger('click'); // Falso clique, clica no botão 2. Serve p selecionar várias outras áreas, checkbox
    });

    $('#btn2').bind('click', function(){
        alert('Clicou no botão 2');
    });
});
