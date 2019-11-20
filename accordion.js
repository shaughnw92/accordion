$(document).ready(function() {

    $(".accordion .accordion--header:first").addClass(".accordion__active").next().slideToggle(); // by default, the first accordion header is active

    $(".accordion .accordion--header").click(function() { // check if an accordion-header is clicked

        $(this).next().slideToggle(); // close this accordion and open others
        $(".accordion--content").not($(this).next()).slideUp(); // close other accordions but not this one
        $(this).toggleClass("accordion__active"); // toggle the active class on this accordion, if it's active, it will not be active, if it's not active, it will be active
        $(".accordion .accordion--header").not($(this)).removeClass("accordion__active"); // other accordions that aren't this one will be made lose the class "active"
    });
});
