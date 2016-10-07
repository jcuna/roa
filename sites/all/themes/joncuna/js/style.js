(function ($) {
    'use strict';

    $(document).ready( function() {

        expandMenu();
        underLine();

        if ($(".group-zoom-on-hover").length !== 0) {
            zoomOnHover();
        }

        $(".pop-profile").on('click', function() {
            popProfile(this);
        });

    });

    /**
     * Makes menu expand on hover
     */
    var expandMenu = function () {
        'use strict';

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
        'use strict';

        var headings = "h2, h3";
        $(headings).hover( function() {
            var html = $(this).html();
            var hidden = $("<span class='width-calculate' style='display: none;'>" + html + "</span>");
            $(this).after(hidden);

            var widthClass = '.width-calculate';
            var width = $(widthClass).width() + 60;
            $(widthClass).remove();

            $(this).addClass("hovered-line").css("background-size", width + "px");
        });
        $(headings).mouseout( function() {
            $(this).removeClass("hovered-line")
        });
    };

    /**
     * Zoom images on hover
     */
    var zoomOnHover = function () {
        'use strict';

        var selector = ".field-name-field-zooming-image";

        $(selector).hover(function() {
            $(this).addClass('enlarge-transition');

        }, function() {
            $(this).removeClass('enlarge-transition');
        });
    };

    var popProfile = function (imageElement) {

        var parent = $(imageElement).closest('.group-team-profile');
        var name = parent.find('h4').text();

        var img = parent.find('img').clone();
        var imgContainer = $('<div>', {class: 'profile-image-popup'});
        imgContainer.append(img);
        var bio = $('<div>', {
            class: 'text',
            text: parent.find(".show-on-pop").clone().text()
        });

        var body = $('<div>', {class: 'profile-modal'});
        body.append(imgContainer).append(bio);

        var modal = $("#modal");
        addModal(modal, name, body);
        modal.modal('show');
    };

    var addModal = function (modal, title, description) {
        var content = $('<div>', {class: 'modal-content'});
        var header = $('<div>', {class: 'modal-header'});
        var button = $('<button>', {
            class: 'close',
            "data-dismiss": 'modal',
            "aria-label": 'Close',
            text: 'x'
        });

        var titleElement = $('<h4>', {
            class: 'modal-title',
            text: title
        });
        var body = $('<div>', {
            class: 'modal-body',
        });

        header.append(button).append(titleElement);
        content.append(header);
        content.append(body.append(description));

        modal.find('.modal-dialog').html(content);
    }

}(jQuery));