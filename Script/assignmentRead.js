$(document).ready(function () {
    var assignments = []
    $.ajax({
        type: "GET",
        url: '/home/upcoming_ajax',
        data: '',
        success: function (data) {

            // create a empty div, with content from ajax output
            var object = $('<div/>').html(data.html).contents();

            var h4_list = $(object[1]).find('h4');
            $.each(h4_list, function (index, element) {
                
                // create a dummuy object
                var dummy = $('<div/>').html(element.outerHTML).contents();
                var course = dummy.find('.realm-title-course');
                if (course && course.length > 0 && course[0].outerText) {
                    console.log(course[0].outerText);
                }
            });

        },
        dataType: "json"
    });
});

