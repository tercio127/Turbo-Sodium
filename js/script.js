$(document).ready(function() {
    //Fixed Menu
    fixedMenu();
    //Mobile Menu
    mobileMenuInit();
    //Scroll down in header
    headerScrollDown();
    //Scroll up in footer
    footerScrollUp();
    //WOW animation init
    wowInit();
    if($("body.homepage").length>0){
        //Homepage HeroSlider
        homeSliderInit();

        //Homepage testimonials
        testimonialsSliderInit();

        //Homepage Services
        var brake_array = {};
        brake_array["1200"] = 4;
        brake_array["992"] = 3;
        brake_array["768"] = 2;    
        brake_array["469"] = 1; 
        rowModuleBreaker(".homepage .services",".box-services",brake_array,"first","last");

        //Homepage Features
        var brake_array = {};
        brake_array["768"] = 2;    
        brake_array["469"] = 1; 
        rowModuleBreaker(".homepage .features",".feature",brake_array,"first","last");

        //Skills animation
        skillsInit();
    }
});
function wowInit(){
        wow = new WOW({
            mobile: false
        });
        wow.init();
}
function headerScrollDown(){
    $(".mouse_scroll").click(function() {
        $("html, body").animate({
            scrollTop: $("#main_section").position().top - 70
        }, 1000);
        return false
    });
}
function footerScrollUp(){
    $(".scroll-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false
    });

}
function testimonialsSliderInit(){
    $('.slick-testimonial > div > span').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 1000,
        responsive: [
        {
          breakpoint: 767,
            settings: {
                dots:true,
                arrows: false,
            }
        }]
        });
}
function mobileMenuInit(){
    $("#menu").slicknav({
        prependTo: "header.header",
        label: ""
    });
    $(".slicknav_btn").click(function(i) {
        console.log("test");
        if ($("header.header.fixed-small").length > 0) {
            $("header.header").removeClass("fixed-small")
        } else {
            $("header.header").addClass("fixed-small")
        }
    });
}
function homeSliderInit(){
    $(".main .homeslider > span").slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        responsive: [
        {
          breakpoint: 767,
            settings: {
                dots:true,
                arrows: false,
        }
        }]
    });

}

function fixedMenu(){
        $(window).scroll(function() {
        var i = $(window).scrollTop();
        if (i > 0) {
            $("header.header").addClass("fixed");
            if ($(".menu-black").length > 0) {
                $(".menu-black .header .black").css("display", "none");
                $(".menu-black .header .white").css("display", "block")
            }
        } else {
            if (i == 0) {
                $("header.header").removeClass("fixed");
                if ($(".menu-black").length > 0) {
                    $(".menu-black .header .black").css("display", "block");
                    $(".menu-black .header .white").css("display", "none")
                }
            }
        }
    });
}
function rowModuleBreaker(parent,css_selector,break_array,class_first_row,class_last_row){
    var oldCols=0;
    $(window).resize(function(){
        var cols=0;
        var lastBrake=0;
        for(var windowBreak in break_array){
            if(window.innerWidth<=parseInt(windowBreak)){
                cols=break_array[windowBreak];
                break;
            }
            lastBreak=windowBreak;
        }

        if(cols==0){
            cols=break_array[lastBreak];
        }
        if(oldCols==0||oldCols!=cols){
            $(parent).each(function(j,selector){
            
            var old=oldCols;
            oldCols=cols;
            var inc=-1;
            var row=[];
            var length=$(selector).find(css_selector).length;
            $(selector).find(css_selector).each(function(i,e){
                if(i%cols==0){
                    inc++;
                    row=[];
                }
                row.push($(e).parent().clone(true));
                $(e).parent().parent().addClass("old_remove");
                if(i%cols==cols-1){
                    var rowContainer=$("<div class='row'></div>");
                    if(inc==0){
                        rowContainer.addClass(class_first_row);
                    }
                    if(i==length-1){
                        rowContainer.addClass(class_last_row);
                    }
                    rowContainer.append(row);
                    $(e).parent().parent().before(rowContainer);
                    
                }

                if(i%cols<cols-1 && i==length-1){
                        var rowContainer=$("<div class='row'></div>");
                        if(inc==0){
                            rowContainer.addClass(class_first_row);
                        }
                        rowContainer.addClass(class_last_row);
                        rowContainer.append(row);
                        $(e).parent().parent().before(rowContainer);
                }
                if($(e).parent().parent().hasClass("hs_cos_wrapper_type_custom_widget")){
                    $(e).parent().parent().remove();
                }
            });
            $(selector).find(css_selector).parent().attr("class","span"+(12/cols));
            $(".old_remove").remove();
            });
        }
    });
    $(window).resize();
}
function skillsInit(){
            var j = $(".loader1").ClassyLoader({
            speed: 30,
            diameter: 80,
            roundedLine: true,
            fontSize: "44px",
            fontFamily: "Palanquin",
            fontColor: "#ffffff",
            lineColor: "#ffffff",
            percentage: 0,
            lineWidth: 5,
            start: "top",
            remainingLineColor: "#636362",
            animate: false
        });
        var h = $(".loader2").ClassyLoader({
            speed: 30,
            diameter: 80,
            roundedLine: true,
            fontSize: "44px",
            fontFamily: "Palanquin",
            fontColor: "#ffffff",
            lineColor: "#ffffff",
            percentage: 0,
            lineWidth: 5,
            start: "top",
            remainingLineColor: "#636362",
            animate: false
        });
        var g = $(".loader3").ClassyLoader({
            speed: 30,
            diameter: 80,
            roundedLine: true,
            fontSize: "44px",
            fontFamily: "Palanquin",
            fontColor: "#ffffff",
            lineColor: "#ffffff",
            percentage: 0,
            lineWidth: 5,
            start: "top",
            remainingLineColor: "#636362",
            animate: false
        });
        var f = $(".loader4").ClassyLoader({
            speed: 30,
            diameter: 80,
            roundedLine: true,
            fontSize: "44px",
            fontFamily: "Palanquin",
            fontColor: "#ffffff",
            lineColor: "#ffffff",
            percentage: 0,
            lineWidth: 5,
            start: "top",
            remainingLineColor: "#636362",
            animate: false
        });
        $(window).scroll(function(){
                    var w = $(window).scrollTop();
        var t = $(".skills").position().top;
        var z = $(window).height();
        var u = w + z;
        var i = $(".skills .circle1").html();
        var y = $(".skills .circle2").html();
        var x = $(".skills .circle3").html();
        var v = $(".skills .circle4").html();
        if (u - 200 > t && r == 0) {
            r = 1;
            j.setPercent(i).draw();
            h.setPercent(y).draw();
            g.setPercent(x).draw();
            f.setPercent(v).draw();
        }

        });

}

    if ($(".skills").length > 0) {
    }
    if (($("#counter").length > 0)) {
        var n = $("#counter .counter-box .counter1 span").text();
        var m = $("#counter .counter-box .counter2 span").text();
        var l = $("#counter .counter-box .counter3 span").text();
        var k = $("#counter .counter-box .counter4 span").text();
        var e = $("#counter").position().top + 100;
        var q = 0;
        var p = 0;
        $("#counter .counter-box .counter1 span").text(m);

        function d() {
            q = 1;
            if (p <= n) {
                $("#counter .counter-box .counter1 span").text(p)
            }
            if (p <= m) {
                $("#counter .counter-box .counter2 span").text(p)
            }
            if (p <= l) {
                $("#counter .counter-box .counter3 span").text(p)
            }
            if (p <= k) {
                $("#counter .counter-box .counter4 span").text(p)
            }
            p = p + 2;
            if (p <= n || p <= m || p <= l || p <= k) {
                setTimeout(d, 15)
            }
        }
        $(window).scroll(function() {
            if (($(window).scrollTop() + $(window).height()) > e && q == 0) {
                d()
            }
        });
        if (($(window).scrollTop() + $(window).height()) > e && q == 0) {
            d()
        }
    }
    if ($(".faq").length > 0) {
        $(".faq .questions .question h3").click(function(i) {
            if ($(this).hasClass("rotate")) {
                $(this).parent().children("p.text").slideUp("fast");
                $(this).removeClass("rotate")
            } else {
                $(".faq .questions .question p.text").slideUp("fast");
                $(".faq .questions .question h3").removeClass("rotate");
                $(this).addClass("rotate");
                $(this).parent().children("p.text").slideDown("fast");
                $(".faq .questions .question").css("position", "initial")
            }
        })
    }
    $(".map .map-wrapper .mask").click(function(i) {
        $(this).css("display", "none")
    });
    $(document).mouseup(function(t) {
        var i = $(".map .map-wrapper");
        if (!i.is(t.target) && i.has(t.target).length === 0) {
            $(".map .map-wrapper .mask").css("display", "block")
        }
    });
    $(document).scroll(function(t) {
        var i = $(".map .map-wrapper");
        if (!i.is(t.target) && i.has(t.target).length === 0) {
            $(".map .map-wrapper .mask").css("display", "block")
        }
    });
    $(window).resize(function() {
        if ($(window).innerWidth() < 768) {
            if ($(".process .process_text .circle").length == 0) {
                $.each($(".process .circle"), function(t, u) {
                    var v = $(u).clone();
                    $(".process .process_text").eq(t).find(".hs_cos_wrapper_type_rich_text").append(v)
                });
                $(".process .process_text .circle").css({
                    position: "absolute",
                    top: "-10px",
                    left: "10px"
                })
            }
            $(".process .circle").css("display", "none");
            $(".process .process_text .circle").css("display", "block")
        } else {
            $(".process .circle").css("display", "block");
            $(".process .process_text .circle").css("display", "none")
        }
    });
    $(window).resize();
    $(window).resize(function() {
        if ($(window).innerWidth() < 768) {
            $(".progress_bars").css("width", "100%").css("width", "+=30px")
        } else {
            $(".progress_bars").removeAttr("style")
        }
    });
    $(window).resize();
    $(".hs-form input").focus(function() {
        $(".hs-form a").css("color", "#fff")
    });
    $(".hs-form input").blur(function() {
        if ($(".hs-form input").val() != "") {
            $(".hs-form input").addClass("active");
            $(".hs-form .field a").css("color", "#fff")
        } else {
            $(".hs-form input").removeClass("active");
            $("header.header .hs-form .field a").css("color", "#ffc400")
        }
    });
    $("#menu").slicknav({
        prependTo: "header.header",
        label: ""
    });
    $(".main.about div").removeClass("hs_cos_flex-slider flex-slider-main slider-mode-slider");
    $(".main.about ul").removeClass("hs_cos_flex-slides hs_cos_flex-slides-main");
    $(".main.about li").removeClass("hs_cos_flex-slide-main");
    $.each($(".main.about ul li img"), function(t, u) {
        $(u).parent().css("backgroundImage", "url(" + $(u).attr("src") + ")").addClass("slide");
        $(u).remove()
    });
    $(".main.about ul").slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear"
    });
    $(".slick-main div").removeClass("hs_cos_flex-slider flex-slider-main slider-mode-slider");
    $(".slick-main ul").removeClass("hs_cos_flex-slides hs_cos_flex-slides-main");
    $(".slick-main li").removeClass("hs_cos_flex-slide-main");
    $.each($(".slick-main ul li img"), function(t, u) {
        $(u).parent().css("backgroundImage", "url(" + $(u).attr("src") + ")").addClass("slide");
        $(u).remove()
    });
    $(".slick-main ul").slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear"
    });
    var r = 0;

    var s = 0;
    if ($(".wrapper-bars").length > 0) {
        c()
    }
    $(window).scroll(function() {
        var i = $(window).scrollTop();
        if (i > 0) {
            $("header.header").addClass("fixed");
            if ($(".menu-black").length > 0) {
                $(".menu-black .header .black").css("display", "none");
                $(".menu-black .header .white").css("display", "block")
            }
        } else {
            if (i == 0) {
                $("header.header").removeClass("fixed");
                if ($(".menu-black").length > 0) {
                    $(".menu-black .header .black").css("display", "block");
                    $(".menu-black .header .white").css("display", "none")
                }
            }
        }
        if ($(".wrapper-bars").length > 0) {
            c()
        }
    });
    var a = $(window).scrollTop();
    if (a > 0) {
        $("header.header").addClass("fixed");
        if ($(".menu-black").length > 0) {
            $(".menu-black .header .black").css("display", "none");
            $(".menu-black .header .white").css("display", "block")
        }
    } else {
        if (a == 0) {
            $("header.header").removeClass("fixed");
            if ($(".menu-black").length > 0) {
                $(".menu-black .header .black").css("display", "block");
                $(".menu-black .header .white").css("display", "none")
            }
        }
    }

    if ($(".wrapper-bars").length > 0) {
        c()
    }



    function c() {
        var x = $(window).scrollTop();
        var w = $(".about-me-skills").position().top;
        var z = $(window).height();
        var v = x + z;
        if (v - 130 > w && s == 0) {
            s = 1;
            var u = $(".bar1 span").html();
            var t = $(".bar2 span").html();
            var i = $(".bar3 span").html();
            var y = $(".bar4 span").html();
            $(".bar span").html(0 + "%");
            $(".wrapper-bars .loading-bar").css("width", 0 + "%");
            setTimeout(function() {
                $(".wrapper-bars .bar1 .loading-bar").css("width", u + "%");
                $(".bar1 span").html(u + "%")
            }, 100);
            setTimeout(function() {
                $(".wrapper-bars .bar2 .loading-bar").css("width", t + "%");
                $(".bar2 span").html(t + "%")
            }, 500);
            setTimeout(function() {
                $(".wrapper-bars .bar3 .loading-bar").css("width", i + "%");
                $(".bar3 span").html(i + "%")
            }, 900);
            setTimeout(function() {
                $(".wrapper-bars .bar4 .loading-bar").css("width", y + "%");
                $(".bar4 span").html(y + "%")
            }, 1200)
        }
    }
    $(".slicknav_btn").click(function(i) {
        console.log("test");
        if ($("header.header.fixed-small").length > 0) {
            $("header.header").removeClass("fixed-small")
        } else {
            $("header.header").addClass("fixed-small")
        }
    });
    setTimeout(function() {
        $(".404_cta").show()
    }, 1300);
    if ((!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/9\.\d+ Mobile)/i)) || (!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/8\.\d+ Mobile)/i)) || (!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/7\.\d+ Mobile)/i)) || (!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/6\.\d+ Mobile)/i))) {
        var o = $(".main .slide");
        o.css("backgroundSize", "initial");
        o.css("backgroundAttachment", "initial");
        o.css("height", window.innerHeight)
    }
    if ((!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/9\.\d+ Mobile)/i)) || (!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/8\.\d+ Mobile)/i)) || (!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/7\.\d+ Mobile)/i)) || (!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/6\.\d+ Mobile)/i))) {
        var o = $(".services-main");
        o.css("backgroundSize", "initial");
        o.css("backgroundAttachment", "initial");
        o.css("height", window.innerHeight)
    }
    if ((!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/9\.\d+ Mobile)/i)) || (!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/8\.\d+ Mobile)/i)) || (!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/7\.\d+ Mobile)/i)) || (!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/6\.\d+ Mobile)/i))) {
        var o = $(".faq-main");
        o.css("backgroundSize", "initial");
        o.css("backgroundAttachment", "initial");
        o.css("height", window.innerHeight)
    }
    if ((!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/9\.\d+ Mobile)/i)) || (!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/8\.\d+ Mobile)/i)) || (!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/7\.\d+ Mobile)/i)) || (!!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/6\.\d+ Mobile)/i))) {
        var o = $(".about-me");
        o.css("backgroundSize", "initial");
        o.css("backgroundAttachment", "initial");
        o.css("height", window.innerHeight)
    }
    $(".faq .sidebar .widget-type-simple_menu li").hover(function() {
        if ($(this).hasClass("hs-item-has-children")) {
            $(this).find("ul:first").stop(true, true).slideDown("slow")
        }
    }, function() {
        if ($(this).hasClass("hs-item-has-children")) {
            $(this).find("ul:first").stop(true, true).slideUp("slow")
        }
    })
