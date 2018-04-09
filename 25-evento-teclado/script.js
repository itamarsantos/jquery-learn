$(function(){
    // $('#n').bind('keydown', function(){
    //     console.log('Uma tecla foi apertada!');
    // });
    // $('#nome').bind('keyup', function(){
    //     console.log('Uma tecla foi soltada!');
    // });

    $('#n').bind('keyup', function(e){
        if (e.keyCode == 13) {
            var txt = $(this).val();    // Pega o texto digitado
            console.log(txt);           // Mostra texto no log
            $(this).val('');            // Limpa texto
        }

    });
});
