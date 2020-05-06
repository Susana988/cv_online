(function ($) {
    $(window).on("load", function () {
        $(".site-content-page-wrap").mCustomScrollbar({ theme: "minimal" });
        $(".skills-item").each(function () {
            var value = $(this).data("value");
            $(this).find(".skills-line-fill").css("width", value);
            $(this).find(".skills-value").text(value);
        });
    });
})(jQuery);