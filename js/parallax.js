$(function(){
    $(window).scroll(function(){
        var window_scrolltop = $(this).scrollTop()

        // Passar por cada elemento com a classe .parallax
        $('.parallax').each(function(){
            var obj = $(this)

            // Garante que apenas trabalharemos com os elementos que estão visíveis na tela
            if(window_scrolltop >= obj.position().top - obj.height() && window_scrolltop <= obj.position().top + obj.height()){

                // O atributo data-divisor vai defeinir a velocidade do efeito
                var divisor = typeof obj.attr('data-divisor') == 'undefined' ? 4 : obj.attr('data-divisor')

                // Corrige a diferença do primeiro elemento
                if(obj.is(':first-child')){
                    var bg_pos = (window_scrolltop - obj.position().top) / divisor
                }else{
                    var bg_pos = (window_scrolltop - obj.position().top + (obj.height() - 100))/divisor
                }

                // executar as modificações da imagens de fundo
                obj.css({
                    'background-position' : '50% -' + bg_pos + 'px'
                })

            }
        })
    })
})