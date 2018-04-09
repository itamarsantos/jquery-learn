$(function(){
    $('.botao').bind('mousedown', function(){
        console.log('Clicou o mouse');
    });

    $('.botao').bind('mouseup', function(){
        console.log('Soltou o clique do mouse');
    });

    $('.botao').bind('mousemove', function(){
        console.log('Moveu o mouse');
    });

    $('.botao').bind('mouseover', function(){
        $(this).addClass('botao:hover');
        console.log('Mouse está em cima');
    });

    $('.botao').bind('mouseout', function(){
        console.log('Tirou o mouse');
    });

    $('.botao').bind('click', function(){
        console.log('Clicou!');
    });

    $('.botao').bind('dblclick', function(){
        console.log('Dois cliques!');
    });
});
