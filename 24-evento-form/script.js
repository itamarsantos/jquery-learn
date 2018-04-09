$(function(){
    // Evento padrão de form
    $('#form').bind('submit', function(e){
        e.preventDefault(); // Evita que o form atualize a página
        console.log('O formulário foi submitado!');
    });

    // Evento selecionar texto dentro do form
    $('#nome').bind('select', function(){
        console.log('Algo foi selecionado em nome!');
    });

    // Evento para foco
    $('#nome, #email').bind('focus', function(){
        $(this).css('background-color', '#999');
    });

    // Evento para desfoco
    $('#nome, #email').bind('blur', function(){
        $(this).css('background-color', '#fff');
    });

    // Pegar nome escolhido na option, ótimo para saber quais opções o usuário ficou em dúvida
    $('#idade').bind('change', function(){
        console.log($(this).val());
    });
});
