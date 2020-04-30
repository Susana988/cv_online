(function ($) {
    $(window).on("load", function () {
        $(".site-content-page-wrap").mCustomScrollbar({ theme: "minimal" });
        var value = $(".skills-item").data("value");
        $(".skills-line-fill").css("width", value);
    });
})(jQuery);