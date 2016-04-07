/**
 * Created by tonio on 05.04.2016.
 */


(function($){
    $(document).ready(function(){
        $( ".menu-toggle" ).click(function() {
            $(".menu").slideToggle( "fast" );
        });

        $( ".menu ul li .triangle-wrapper" ).click(function() {
            $(this).find('span').toggleClass( "triangle-bottom" );
            $(this).parent().find(".sub-menu").slideToggle( "fast" );
        });
    });
})(jQuery);
