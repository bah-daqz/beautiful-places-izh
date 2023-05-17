    /* Burger Menu Toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $(".nav").toggleClass("active");
    });

    // Close burger after click
    $('.nav__link').on("click", function(){
        $('#nav_toggle').click();
    });


