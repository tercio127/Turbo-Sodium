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
    $("header.header .hs-menu-flow-horizontal > ul").slicknav({
        prependTo: "header.header",
        label: "",
        allowParentLinks:true
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
