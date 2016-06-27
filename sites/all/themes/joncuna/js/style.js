(function ($) {

    $(document).ready( function() {
        $(".menu").find(".expanded").hover( function() {
            $(this).addClass("open");
        }, function () {
            $(this).removeClass("open");
        })
    })

}(jQuery));