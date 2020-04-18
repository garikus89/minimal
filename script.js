$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        items: 1,
    });


    function backToTop(){
        let button = $(".back-to-top");

        $(window).on("scroll", () => {
            if ($(this).scrollTop() >= 200){
                button.fadeIn();
            }else{
                button.fadeOut();
            }
        });

        
        button.on("click", (e) => {
            e.preventDefault();
            $("html").animate({scrollTop: 0}, 1000);
        });
    }

backToTop();

    $(document).on("click", "a[href^='#']", function(){
    let _href = $(this).attr("href");
      $("html").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

})
