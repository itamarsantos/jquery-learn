$(function(){
    $('li').eq(0).html('teste'); // Conseguimos alterar no array
    $('li').eq(0)[0]; // [0] Retorna elemento nativo fora do array
    $('li')[0];
    $('li')[0].innerHTML = "Alguma coisa"; // Agora pode utilizar innerHTML
});
