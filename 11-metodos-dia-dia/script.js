$(function(){
    var valor = $.trim($('#algo').html()); // Trim elimina os espaços desnecessários do html

    // Each passa por todos elementos
    $('li').each(function(){
        alert($(this).html());
    })

    var idade = 10;
    alert($.type(idade)); // type(), mostra o tipo do elemento
});
