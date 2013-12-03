jQuery(document).ready(function () {

    // fixed header shadow
    $(window).scroll(function() {
        if ($(this).scrollTop() == 0) {
            $('.navbar-fixed-top').css({
                'box-shadow': 'none',
                '-moz-box-shadow' : 'none',
                '-webkit-box-shadow' : 'none' });
        }
        else {
            $('.navbar-fixed-top').css({
                'box-shadow': '0px 2px 4px #BEBEBE',
                '-moz-box-shadow' : '0px 2px 4px #BEBEBE',
                '-webkit-box-shadow' : '0px 2px 4px #BEBEBE' });
        }
    });

    // set pre config to the form
    $('.link-box').on('click', function(){
        if ($(this).attr('id') == 'pre-one') {
            $('input').prop('checked', false);
            $('input[name="core"]').prop('checked', true);
            $('input[name="appconfig"][value="facebook"]').prop('checked', true);
            $('input[name="html"][value="html2"]').prop('checked', true);
            $('input[name="polyfills"][value="modernizr"]').prop('checked', true);
            $('input[name="jquery"][value="minified"]').prop('checked', true);
            $('input[name="optional"][value="googleanalytics"]').prop('checked', true);
            $('input[name="optional"][value="favicons"]').prop('checked', true);
            $('input[name="optional"][value="appletouchicons"]').prop('checked', true);
        } else if ($(this).attr('id') == 'pre-two') {
            $('input').prop('checked', false);
            $('input[name="core"]').prop('checked', true);
            $('input[name="html"][value="html3"]').prop('checked', true);
            $('input[name="polyfills"][value="modernizr"]').prop('checked', true);
            $('input[name="jquery"][value="minified"]').prop('checked', true);
            $('input[name="optional"][value="googleanalytics"]').prop('checked', true);
        } else if ($(this).attr('id') == 'pre-three') {
            $('input').prop('checked', false);
            $('input[name="core"]').prop('checked', true);
            $('input[name="html"][value="html1"]').prop('checked', true);
            $('input[name="polyfills"][value="modernizr"]').prop('checked', true);
            $('input[name="jquery"][value="minified"]').prop('checked', true);
            $('input[name="optional"][value="googleanalytics"]').prop('checked', true);
        }
        // slide down main config
        $(".tuning-box").slideDown('slow');
    });

    // slide up/close the main config
    $('#link-box-close').click(function(){
        $(".tuning-box").slideUp('slow');
    });

    // serialize form inputs


    $('#download').click(function(e) {
        /*e.preventDefault();  //prevent form from submitting*/
        var data = $("#config-form :input").serialize();
        alert(data);
        $.ajax({
            //beforeSend: function(xhr){AjaxConnections = 0;},
            type: "POST",
            url: "system/form.php",
            data: data,
            dataType: "json",
            success: function() {
                console.log("success");
            },
            error: function() {
                console.log('ERROR');
            }
        })
    });
    /*
    $( "form" ).submit(function( event ) {
        console.log( $( this ).serializeArray() );
        event.preventDefault();
    });

    $('#download').click(function(event){
        alert($(this).serializeArray());
        //event.preventDefault();
    });
    */
    $('#inside').click(function(){
        alert('SHOW ME WHATS INSIDE !');
        window.location = "inside.html";
    });

    // one page scroll-navigation / docs page
    $(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
                $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top-120
            }, 1100, 'swing', function () {
                window.location.hash = target;
            });
        });
    });


});

