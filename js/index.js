$(document).ready(function() {

    // Landing Page Fade In's
    $(".header").fadeTo(1000, 1);
    $("#full-name").fadeTo(500, 1);
    $("#job-title").fadeTo(1000, 1);
    $("#blue-line").fadeTo(1000, 1);
    $(".arrow-wrapper").fadeTo(3000, 1);


    // Navbar Left Fixed
    let nfLogo = $("#nf-logo");
    let navbarIcons = $(".navbar-icons")

    // Cursor
    new kursor({
        type: 1,
        removeDefaultCursor: true,
        color: "rgb(128,128,128)",

    });
});