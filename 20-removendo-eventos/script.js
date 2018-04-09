$(function(){
    // Para remover evento :: unbind('click')
    // Para remover evento :: off('click')
    $('button').bind('click', function(){
        alert('Clicou');
    });
});
