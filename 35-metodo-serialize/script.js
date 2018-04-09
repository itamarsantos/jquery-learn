$(function(){
    $('#form').bind('submit', function(e){
        e.preventDefault(); // Evita que a página atualize

        var txt = $(this).serialize();
        console.log(txt);
    });
});
