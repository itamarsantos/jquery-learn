// Primeira forma
var $cyber = jQuery.noConflict();

$cyber()    // invés de:
$();        // causaria conflitos, caso houver bibliotecas que a utilizem também

// Exemplo
$cyber(document).ready(function(){
    alert("Está funcionando...");
});

// Segunda forma
jQuery(document).ready(function(){
    alert("Funcionando nativamente...");
});
