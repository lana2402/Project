$(function () {

    const modal = $("[data-modal]");
    const close = $("[data-close]");
    const nav = $("[data-nav]");

    $(".nav_link").on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let navid = $this.data('nav');

        $(".nav_link").removeClass('active');
        $(navid).addClass('active');

    });

    modal.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no_scroll');
        $(".modal_contant").addClass('show');

    });


    close.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $("body").removeClass('no_scroll');
        $(".modal_contant").removeClass('show');

    });

    $(".modal").on("click", function (event) {
        $(".modal").removeClass('show');
        $("body").removeClass('no_scroll');
        $(".modal_contant").removeClass('show');
    });

    $(".modal_contant").on("click", function (event) {
        event.stopPropagation();
    });




});
