// Executa JS só após página carregar

// Primeira forma de fazer
$(document).ready(function(){
    alert("Executa após página estar carregada!");
});

// Segunda forma de fazer
$(function(){
    alert("Executa após página estar carregada!");
});

// Terceira forma de fazer :: Cria função antes, depois executa
function tudoPronto()
{
    alert("Tudo pronto");
}
$(document).ready(tudoPronto);
