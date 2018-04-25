$(function(){
    $('#form').bind('submit', function(e){
        e.preventDefault();

        var txt = $(this).serialize();
        console.log(txt);

        $.ajax({
            type:'post',
            url:'ajax.php',
            data:txt,
            dataType:'json', // Vai retornar json
            success:function(json) {
                if (json.nome == 'Itamar')
                {
                    alert('Usuário secreto!')
                }
                else
                {
                    alert('Usuário padrão!')
                }
            }
        });

    });
});
