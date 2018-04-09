// Seleciona todas as tags button
$(function(){
    $("button");
    //$("#button"); // Seleciona id
    //$(".button"); // Seleciona class
    //$("li.botao1"); // Seleciona tag com class
    //$("ul.lista2 li.botao"); // Seleciona segundo elemento parecido
});

// if ($('.botao')) Sempre retorna array vazio
// Forma correta para identificar se há o elemento na página
if ($('.botao1').length > 0)
{
    alert("Tem botão na página!");
}

var armazenarItem = $('.lista2 li.li');
