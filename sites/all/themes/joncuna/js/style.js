(function ($) {

    $(document).ready( function() {

        expandMenu();
        underLine();
    });

    /**
     * Makes menu expand on hover
     */
    var expandMenu = function () {

        $(".menu").find(".expanded").hover( function() {
            $(this).addClass("open");
        }, function () {
            $(this).removeClass("open");
        });
    };

    /**
     * Adds line under headings when hover
     */
    var underLine = function () {

        $headings = "h2, h3, h4";
        $($headings).hover( function() {
            var html = $(this).html();
            var hidden = $("<span class='width-calculate' style='display: none;'>" + html + "</span>");
            $(this).after(hidden);

            var widthClass = '.width-calculate';
            var width = $(widthClass).width() + 60;
            $(widthClass).remove();

            $(this).addClass("hovered-line").css("background-size", width + "px");
        });
        $($headings).mouseout( function() {
            $(this).removeClass("hovered-line")
        });
    }

}(jQuery));