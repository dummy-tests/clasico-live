$(document).ready(function(){
    // size screen 
    
    
    
    
    
    
    
    
    
    
    
    //soical media-----------------------------

/*    var  theDay = $(".day");
    function anmaTe (d) {
        var cards = d.find(".card-match");
        cards.addClass("animate");     
    }
    
    anmaTe(theDay);*/
    
    (function selctDay () {
        var buttonDay = $(".select-day").find("li");
        buttonDay.click(function () {
            var selct = $(this).attr("name");
            console.log(selct);
            if ($(this).hasClass("active")) {
                console.log("hass class");
            } else {
                $(this).addClass("active").siblings().removeClass("active");
                $(".day.active").fadeOut(100);
                $("div[id=" + selct +"]").fadeIn(400).addClass("active").siblings().removeClass("active");
            }        
        });
    } () );
    
    
    
    
    
    
    
    
    // -------------------------------------------------حركة الايقونات
   
    setInterval(function () {
        var icon = $(".soical-media i.active");
        if (icon.is(":last-child")) {
                $(".soical-media i").eq(0).addClass("active").siblings().removeClass("active");
        }
                
        icon.removeClass("active").next().addClass("active");
    },2000);
    // -------------------------------------------------حركة الايقونات

    
    
    
    
    
    
    
    
    
    
    // -------------------------------------------------الاختيار بين الدوريات و الملخصات
    
/*    var sideD = setInterval(function () {


        var SIDE = $(".side-content .active");
        if (SIDE.is(":last-child")) {
                SIDE.fadeOut(function () {
                    $(".side-content div").eq(0).fadeIn().addClass("active").siblings().removeClass("active");
                });

        }

        SIDE.fadeOut(function () {
            $(this).removeClass("active").next().fadeIn().addClass("active");
        });

        if (x=0){
            clearInterval(samer1);
        }


    },8000);





    var sideU = setInterval(function () {

        var SIDE = $(".toggle-button .active");
        if (SIDE.is(":last-child")) {
                $(".toggle-button div").eq(0).addClass("active").siblings().removeClass("active");
        }

        SIDE.removeClass("active").next().addClass("active");
    },8000);
    
    $(".side-bar").hover(function () {
        clearInterval(sideD);
        clearInterval(sideU);
    });*/
    
    
    (function () {
        var WidthWindow = $(window).width(),
            htmlV = `
                  <div class="toggle-button color-1">
                <div name="liga">ترتيب الدوريات</div>
                <div name="goals" class="active" >أهدلف وملخصات</div>
                </div>
                
                    <div class="side-content">

                        <div id="liga" class="lig">
                            <table>
                                <tr>
                                    <th class="table-name" colspan="5">الدوري الانجليزي الممتاز</th>
                                </tr>
                                <tr>
                                    <th>مركز</th>
                                    <th>النادي</th>
                                    <th>لعب</th>
                                    <th>أهداف</th>
                                    <th>نقاط</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>ريال مدريد</td>
                                    <td>45</td>
                                    <td>+88</td>
                                    <td>101</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>ريال مدريد</td>
                                    <td>38</td>
                                    <td>+88</td>
                                    <td>101</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>ريال مدريد</td>
                                    <td>38</td>
                                    <td>+88</td>
                                    <td>101</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>ريال مدريد</td>
                                    <td>38</td>
                                    <td>+88</td>
                                    <td>101</td>
                                </tr>

                            </table>

                        </div>
                    <div id="goals" class="goals active">
                        <div class="card-goals">
                            <div class="goals-title">
                                <h2>مـلـخـص و أهــداف</h2>
                                <p>ريال مدريد</p>
                                <p>vs</p>
                                <p>برشلونة</p>
                            </div>
                            <div class="goals-video">
                                <iframe src="https://www.youtube.com/embed/I9LEezIONFQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                            <div class="goals-info">
                                <p class="en" style="font-size: 1.3em">2018-5-26</p>
                                <p>تعليق :  عصام الشوالي</p>
                            </div>
                        </div>
                        <div class="card-goals">
                            <div class="goals-title">
                                <h2>ملخص و أهداف</h2>
                                <p>ريال مدريد</p>
                                <p>vs</p>
                                <p>برشلونة</p>
                            </div>
                            <div class="goals-video">
                                <iframe  src="//www.ok.ru/videoembed/759141501548" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                            </div>
                            <div class="goals-info">
                                <p class="en" style="font-size: 1.3em">2018-5-26</p>
                                <p>تعليق :  عصام الشوالي</p>
                            </div>
                        </div>

                    </div>
                </div>
`;
        if (WidthWindow > 768) {
            $(".side-bar").html(htmlV);
            /*var changeSize = $("#change-size");
            changeSize.attr("href", "/static/css/base.css");*/
        }
        $(".toggle-button div").click(function () {
            var selected = $(this).attr("name");
            if ($(this).hasClass("active")) {
                console.log("i hass class"+WidthWindow);
            } else {
                $(this).addClass("active").siblings().removeClass("active");
                $("div[id=" + selected +"]").addClass("active").siblings().removeClass();
            }
        });
        
    } ());
    
    
    
    
    
    
    
    
    // -------------------------------------------------الاختيار بين الدوريات و الملخصات
    
    
    
    
    
    
    
    
    // change color 
    (function changeColor() {
        var toggleColor = $("#change-color"),
            buttonActive = $("#buttonActive");
            
        $("#tow-color").click(function () {
            
            if (buttonActive.hasClass('active')) {
                buttonActive.toggleClass('active');
                toggleColor.attr("href", "../../../static/css/none");
            } else {
                buttonActive.toggleClass('active');
                toggleColor.attr("href", "/static/css/change-color.css");
            }
            
        });
        
    }());
    
    
    //-----------------------------امنع الافتراضي لم يبدا البث -------------------------------------------------------------------------------------------
    
    (function () {
        $(".noneHover").click(function (event) {
            var text = $(this).text(),
                defultText = "تبدأ قريباً";
            if (text == defultText) {
                event.preventDefault();
                alert("لم يبدأ البث بعد");
            }
        });
    } ());
    
    
    
    
    
    
    
    
        //-----------------------------امنع الافتراضي لم يبدا البث  -------------------------------------------------------------------------------------------

    
    //change links ----------------------------------------------------------------------------------------------------------------------
    
    (function selcetLink () {
        $("#view").html($("#link-one").text());
        $(".select-link ul li").click(function() {
            var selected = $(this).attr("name");
            $(this).addClass("active").siblings().removeClass("active");
            $("#view").html($("div[id=" + selected +"]").text()); 

        });
        
        
    } ());
    
    //change links ----------------------------------------------------------------------------------------------------------------------

    window.onload= function() {
        Particles.init({
            selector:'.background',
            color: '#ffffff',
            
        });
    };
    
    
});