//script in teacher_login.html

    (function ($) {
        $(window).on("load", function () {
            var whiteUrls = ['/', '/login','/lab3/involved/','/lab3/involved/login'];
            setTimeout(function () {
                initmScroller();
                if ($.inArray(window.location.pathname, whiteUrls) > -1) {
                    $("head").append("<script type='text/javascript' src='js/particles.js'></script>").append("<script type='text/javascript' src='js/app.js'></script>");
                }
                //$(window).trigger('load.bs.select.data-api');
                initDropdown();
                $( ".datepicker" ).datepicker();
              
            }, 1500);
            
            abc();
            
      
            function initmScroller ()
            {
                //console.log('initmScroller');
                $("#content-1").mCustomScrollbar({
                    axis: "y",
                    theme: "3d",
                    scrollInertia: 550,
                    scrollbarPosition: "outside"
                });
                $("#content-2").mCustomScrollbar({
                    axis: "y",
                    theme: "3d",
                    scrollInertia: 550,
                    scrollbarPosition: "outside"
                });
                $(".right_srl").mCustomScrollbar({
                    axis:"x",
                    theme:"3d",
                    scrollInertia:550,
                    scrollbarPosition:"outside"
                });        
                $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {                
                    $(".right_srl").mCustomScrollbar("destroy");             
                    $(".right_srl").mCustomScrollbar({
                        axis:"x",
                        theme:"3d",
                        scrollInertia:550,
                        scrollbarPosition:"outside"
                    });
                });
                $(".content").mCustomScrollbar({
                    axis: "y",
                    theme: "3d",
                    scrollInertia: 550,
                    scrollbarPosition: "outside"
                });
            }
            
            function abc()
            {
               // alert('abc func');
                var win_width = $(window).width();
                if (win_width >568)
                {
                    var highestBox = 0;
                    $('.same_ht').each(function(){
                        if($(this).height() > highestBox)
                        {
                            highestBox = $(this).height();
                        }
                    });
                    $('.same_ht').height(highestBox);
                }
            }  
            $(window).resize(function() {
                $('.same_ht').removeAttr("style");
                abc();
            });

        });  
 
        
    })(jQuery);

      

