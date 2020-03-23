$(document).ready(function () {
    var assignments = []

    // alert('inside assignmentread.js');


    //
    // var main_content_wrapper = $('.sHome-processed')[0];
    // var main_content_wrapper_html = main_content_wrapper.outerHTML;
    // console.log(main_content_wrapper_html);

    // create a element from html

    // var dom_nodes = $($.parseHTML(main_content_wrapper_html));
    // console.log(dom_nodes);
    //
    
    // var e = main_content_wrapper.find('.realm-title-course');
    //console.log(e.outerHTML);

    //var main = $($('.upcoming-list')[0].offsetParent).find('.realm-title-course');
    //var element = $('.infotip');
    // 
    // if (element !== null && element !== undefined) {
    // e.each(function (index, content) {
    //     alert('found assig');

    //     //var str = content.attr("aria-label");
    //     alert(content.innerHTML);
    // });
    // }

    $.ajax({     
        type: "GET",
        url: '/home/upcoming_ajax',
        data: '',
        success: function (data) {
            
            console.log(data);
            // debugger
            // var string = '<div><input type="text" value="val" /></div>';
            var object = $('<div/>').html(data.html).contents();
            console.log(object[1].outerHTML);
            //var main = $(object[1]).find('.sCommonInfotip-processed');

            // alert( object.find('input').val() );
            
            // create a element from html

            // var dom_nodes = $.parseHTML(data);
            // var dom_nodes = $($.parseHTML('<div><input type="text" value="val" /></div>'));
            // var dom_nodes = $($.parseHTML(data));

            // console.log(dom_nodes);
            
            // var e = dom_nodes.find('.realm-title-course');
            // console.log(e.outerHTML);

        },
        dataType: "json"
    });
});

