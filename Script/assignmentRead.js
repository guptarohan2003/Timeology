$(document).ready(function () {
    // console.log('before');
    $.ajax({
        type: "GET",
        url: '/home/upcoming_ajax',
        data: '',
        success: function (data) {

            //array of each assignments course
            var assignments = [];
            // create a empty div, with content from ajax output
            var object = $('<div/>').html(data.html).contents();

            var h4_list = $(object[1]).find('h4');
            $.each(h4_list, function (index, element) {

                // create a dummy object
                var dummy = $('<div/>').html(element.outerHTML).contents();
                var course = dummy.find('.realm-title-course');
                if (course && course.length > 0 && course[0].outerText) {
                    //console.log(course[0].outerText);
                    var str = course[0].outerText;
                    var cut = -1;
                    var i;
                    for (i = 0; i < str.length; i++) {
                        if (str.charAt(i) == '-') {
                            cut = i;
                            break;
                        }
                    }
                    str = str.substring(0, cut - 1);
                    assignments.push(str);
                    //console.log(str.substring(0, cut - 1));
                }
            });

            //prints courses name for each assignment posted
            var i;
            for (i = 0; i < assignments.length; i++) {
                //console.log(assignments[i]);
            }

            //get num of assignments for each course
            chrome.storage.sync.get(['class1'], function (val) {
                var value = val.class1;
                var num = 0;
                var i;
                for (i = 0; i < assignments.length; i++) {
                    if (assignments[i] == value.trim()) {
                        num++;
                    }
                }
                chrome.storage.sync.set({ numAssigments1: num.toString() });
            });
            chrome.storage.sync.get(['class2'], function (val) {
                var value = val.class2;
                var num = 0;
                var i;
                for (i = 0; i < assignments.length; i++) {
                    if (assignments[i] == value.trim()) {
                        num++;
                    }
                }
                chrome.storage.sync.set({ numAssigments2: num.toString() });
            });
            chrome.storage.sync.get(['class3'], function (val) {
                var value = val.class3;
                var num = 0;
                var i;
                for (i = 0; i < assignments.length; i++) {
                    if (assignments[i] == value.trim()) {
                        num++;
                    }
                }
                chrome.storage.sync.set({ numAssigments3: num.toString() });
            });
            chrome.storage.sync.get(['class4'], function (val) {
                var value = val.class4;
                var num = 0;
                var i;
                for (i = 0; i < assignments.length; i++) {
                    if (assignments[i] == value.trim()) {
                        num++;
                    }
                }
                chrome.storage.sync.set({ numAssigments4: num.toString() });
            });
            chrome.storage.sync.get(['class5'], function (val) {
                var value = val.class5;
                var num = 0;
                var i;
                for (i = 0; i < assignments.length; i++) {
                    if (assignments[i] == value.trim()) {
                        num++;
                    }
                }
                chrome.storage.sync.set({ numAssigments5: num.toString() });
            });
            chrome.storage.sync.get(['class6'], function (val) {
                var value = val.class6;
                var num = 0;
                var i;
                for (i = 0; i < assignments.length; i++) {
                    if (assignments[i] == value.trim()) {
                        num++;
                    }
                }
                chrome.storage.sync.set({ numAssigments6: num.toString() });
            });
            chrome.storage.sync.get(['class7'], function (val) {
                var value = val.class7;
                var num = 0;
                var i;
                for (i = 0; i < assignments.length; i++) {
                    if (assignments[i] == value.trim()) {
                        num++;
                    }
                }
                chrome.storage.sync.set({ numAssigments7: num.toString() });
            });
        },
        dataType: "json"
    });

    //create html text here that says time of hw
    chrome.storage.sync.get(['totalT'], function (val) {
        var totalZ = parseInt(val.totalT)
        var hrs = Math.floor(totalZ / 60);
        var min = totalZ % 60;
        //document.getElementById("timedisplay").innerHTML = "You have about " +  hrs + " hrs and "+ min + " min of HW today! Good Luck!!";
        chrome.storage.sync.set({ totalT: '0' });
        chrome.storage.sync.get(['enabled'], function (val) {
            if (val.enabled == 'true') {
                var str = "You have about " + hrs + " hrs and " + min + " min of HW today! Good Luck!!";
                $("#right-column").prepend('<div id="timeology time"><table> <tr> <th>Amount of HW Today</th> </tr> <tr> <td id = "time display">' + str + '</td> </tr></table></div>');
            } else {
                // remove timestamp
               
            }
        });
    });
});



