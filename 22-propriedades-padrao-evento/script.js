function eventoDoBotao(e)
{
    e.preventDefault(); // Previne envio do formulário
    alert(e.type); // Mostra evento
    console.log(e.target); // Mostra tag da ação no console
}

$(function(){
    $('#botao').bind('click', eventoDoBotao);
    $('#botao').bind('mouseover', eventoDoBotao);
});
