// Estrutura básica para criar plugin
(function($){
    $.fn.showRealLink = function()
    {
        // Each executa em cada elemento retornado, caso haja vários
        this.each(function(){
            var link = $(this).attr('href');
            $(this).append(' ('+link+')');
        });
        return this;
    }
}(jQuery));
