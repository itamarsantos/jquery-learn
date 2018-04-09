$(function(){
    // $('.botao').bind('click', function() {
    //     $('.div').animate({
    //         'top': 50,
    //         'left': 70
    //     }, {
    //         duration:1500,
    //         step:function(){
    //             console.log('Nova etapa...');
    //         },
    //         complete:function(){
    //             console.log('Animação finalizada!');
    //         },
    //         start:function(){
    //             console.log('Animação começou!');
    //         }
    //     });
    // });

    $('.botao').bind('click', function() {
        $('.div').animate({
            'top': 80,
            'left': 400,
            'height': 50,
            'width': 50
        }, {
            duration:1500,
            complete:function(){
                $('.div').animate({
                    'top': 0,
                    'left': 0,
                    'height': 300,
                    'width': 300
                }, 1500);
            }
        });
    });
});
