$(function(){
    // $('#teste').text("Esse é <b>NEGRITO</b>");
    // $('#teste').attr("id", "novoid"); Muda o valor
    $('#teste').find('img').width(200); // Busca tag find
    // $('input').val('teste'); Adiciona value
    $('input').before("<div>Nome:</div>"); // Adiciona elemento em determinada área
    $('ul').append("<li>Item 5</li>"); // Adiciona elemento tag dentro da tag mãe em último
    $('ul').prepend("<li>Item 0</li>"); // Adiciona elemento tag dentro da tag mãe em primeiro
});
