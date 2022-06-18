$(document).ready(function () {
    //PC
    $(".pc-category-link").mouseenter(function () {
        setTimeout(() => {
            $(".pc-category").removeClass('d-none');
        }, 1);
    });

    $(".pc-category-link,.pc-category").mouseleave(function () {
        setTimeout(() => {
            $(".pc-category").addClass('d-none');
        }, 1);
    });

    //PS4

    $(".ps4-category-link").mouseenter(function () {
        setTimeout(() => {
            $(".ps4-category").removeClass('d-none');
        }, 1);
    });

    $(".ps4-category-link,.ps4-category").mouseleave(function () {
        setTimeout(() => {
            $(".ps4-category").addClass('d-none');
        }, 1);
    });

    //PS5

    $(".ps5-category-link").mouseenter(function () {
        setTimeout(() => {
            $(".ps5-category").removeClass('d-none');
        }, 1);
    });

    $(".ps5-category-link,.ps5-category").mouseleave(function () {
        setTimeout(() => {
            $(".ps5-category").addClass('d-none');
        }, 1);
    });

    //xbox1

    $(".xbox1-category-link").mouseenter(function () {
        setTimeout(() => {
            $(".xbox1-category").removeClass('d-none');
        }, 1);
    });

    $(".xbox1-category-link,.xbox1-category").mouseleave(function () {
        setTimeout(() => {
            $(".xbox1-category").addClass('d-none');
        }, 1);
    });

    //xbox360

    $(".xbox360-category-link").mouseenter(function () {
        setTimeout(() => {
            $(".xbox360-category").removeClass('d-none');
        }, 1);
    });

    $(".xbox360-category-link,.xbox360-category").mouseleave(function () {
        setTimeout(() => {
            $(".xbox360-category").addClass('d-none');
        }, 1);
    });

    //ps3

    $(".ps3-category-link").mouseenter(function () {
        setTimeout(() => {
            $(".ps3-category").removeClass('d-none');
        }, 1);
    });

    $(".ps3-category-link,.ps3-category").mouseleave(function () {
        setTimeout(() => {
            $(".ps3-category").addClass('d-none');
        }, 1);
    });

    //android

    $(".android-category-link").mouseenter(function () {
        setTimeout(() => {
            $(".android-category").removeClass('d-none');
        }, 1);
    });

    $(".android-category-link,.ps3-category").mouseleave(function () {
        setTimeout(() => {
            $(".android-category").addClass('d-none');
        }, 1);
    });

    //news

    $(".news-category-link").mouseenter(function () {
        setTimeout(() => {
            $(".news-category").removeClass('d-none');
        }, 1);
    });

    $(".news-category-link,.news-category").mouseleave(function () {
        setTimeout(() => {
            $(".news-category").addClass('d-none');
        }, 1);
    });


    //burger menu
    //pc
    $(".category-pc-link").click(function () {
        $(".menu-sm").css({
            "transform": "translateX(-120px)",
            "transition": ".7s"
        });
        $(".pc-sm-category").css({
            "transition": ".5s",
            "transform": "translateX(-10px)"
        });
        setTimeout(() => {
            $(".pc-sm-category").css("display", "block");
        }, 1);
    });

    $(".category-close-icon").click(function () {
        setTimeout(() => {
            $(".pc-sm-category").css("display", "none");
        }, 600);
        $(".menu-sm").css({
            "transform": "translateX(0)",
            "transition": ".5s"
        });
        $(".pc-sm-category").css({
            "transform": "translateX(500px)",
            "transition": ".5s"
        });
    });

    //ps4

    $(".category-ps4-link").click(function () {
        $(".menu-sm").css({
            "transform": "translateX(-120px)",
            "transition": ".7s"
        });
        $(".ps4-sm-category").css({
            "transform": "translateX(-10px)",
            "transition": ".5s"
        });
        setTimeout(() => {
            $(".ps4-sm-category").css("display", "block");
        }, 100);
    });

    $(".category-close-icon").click(function () {
        setTimeout(() => {
            $(".ps4-sm-category").css("display", "none");
        }, 600);
        $(".menu-sm").css({
            "transform": "translateX(0)",
            "transition": ".5s"
        });
        $(".ps4-sm-category").css({
            "transform": "translateX(500px)",
            "transition": ".5s"
        });
    });

    //ps5
    $(".category-ps5-link").click(function () {
        $(".menu-sm").css({
            "transform": "translateX(-120px)",
            "transition": ".7s"
        });
        $(".ps5-sm-category").css({
            "transform": "translateX(-10px)",
            "transition": ".5s"
        });
        setTimeout(() => {
            $(".ps5-sm-category").css("display", "block");
        }, 100);
    });

    $(".category-close-icon").click(function () {
        setTimeout(() => {
            $(".ps5-sm-category").css("display", "none");
        }, 600);
        $(".menu-sm").css({
            "transform": "translateX(0)",
            "transition": ".5s"
        });
        $(".ps5-sm-category").css({
            "transform": "translateX(500px)",
            "transition": ".5s"
        });
    });

    //xbox1
    $(".category-xbox1-link").click(function () {
        $(".menu-sm").css({
            "transform": "translateX(-120px)",
            "transition": ".7s"
        });
        $(".xbox1-sm-category").css({
            "transform": "translateX(-10px)",
            "transition": ".5s"
        });
        setTimeout(() => {
            $(".xbox1-sm-category").css("display", "block");
        }, 100);
    });

    $(".category-close-icon").click(function () {
        setTimeout(() => {
            $(".xbox1-sm-category").css("display", "none");
        }, 600);
        $(".menu-sm").css({
            "transform": "translateX(0)",
            "transition": ".5s"
        });
        $(".xbox1-sm-category").css({
            "transform": "translateX(500px)",
            "transition": ".5s"
        });
    });

    //xbox360
    $(".category-xbox360-link").click(function () {
        $(".menu-sm").css({
            "transform": "translateX(-120px)",
            "transition": ".7s"
        });
        $(".xbox360-sm-category").css({
            "transform": "translateX(-10px)",
            "transition": ".5s"
        });
        setTimeout(() => {
            $(".xbox360-sm-category").css("display", "block");
        }, 100);
    });

    $(".category-close-icon").click(function () {
        setTimeout(() => {
            $(".xbox360-sm-category").css("display", "none");
        }, 600);
        $(".menu-sm").css({
            "transform": "translateX(0)",
            "transition": ".5s"
        });
        $(".xbox360-sm-category").css({
            "transform": "translateX(500px)",
            "transition": ".5s"
        });
    });

    //ps3
    $(".category-ps3-link").click(function () {
        $(".menu-sm").css({
            "transform": "translateX(-120px)",
            "transition": ".7s"
        });
        $(".ps3-sm-category").css({
            "transform": "translateX(-10px)",
            "transition": ".5s"
        });
        setTimeout(() => {
            $(".ps3-sm-category").css("display", "block");
        }, 100);
    });

    $(".category-close-icon").click(function () {
        setTimeout(() => {
            $(".ps3-sm-category").css("display", "none");
        }, 600);
        $(".menu-sm").css({
            "transform": "translateX(0)",
            "transition": ".5s"
        });
        $(".ps3-sm-category").css({
            "transform": "translateX(500px)",
            "transition": ".5s"
        });
    });

    //videos
    $(".category-videos-link").click(function () {
        $(".menu-sm").css({
            "transform": "translateX(-120px)",
            "transition": ".7s"
        });
        $(".videos-sm-category").css({
            "transform": "translateX(-10px)",
            "transition": ".5s"
        });
        setTimeout(() => {
            $(".videos-sm-category").css("display", "block");
        }, 100);
    });

    $(".category-close-icon").click(function () {
        setTimeout(() => {
            $(".videos-sm-category").css("display", "none");
        }, 600);
        $(".menu-sm").css({
            "transform": "translateX(0)",
            "transition": ".5s"
        });
        $(".videos-sm-category").css({
            "transform": "translateX(500px)",
            "transition": ".5s"
        });
    });







});
