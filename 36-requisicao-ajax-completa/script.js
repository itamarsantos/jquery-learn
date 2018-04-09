$(function(){
    $('#form').bind('submit', function(e){
        e.preventDefault();

        var txt = $(this).serialize();
        console.log(txt);

        // Requisições ajax com jQuery
        $.ajax({
            type:'post',
            url:'ajax.php',
            data:txt,
            success:function(resultado){
                $('.div').html('Resultado: '+resultado);
            },
            error:function(){
                alert('Ocorreu um erro!');
            }
        });
    });
});
