'use strict';
import 'bootstrap/dist/js/bootstrap';

$(function() {
    //Tab menu
    let tabActive = $('.info_wrapper .info_block.active').data('id');
    console.log(tabActive);
    $("#" + tabActive).fadeIn();

    $('#infopage .info_wrapper .info_block').click(function () {
        let tab_id = $(this).data('id');

        $('.info_wrapper .info_block').removeClass('active');
        $('.tab_content').fadeOut();
        $(this).addClass('active');

        setTimeout(() => {
            $("#" + tab_id).fadeIn();
        }, 400);

    });
  
});
