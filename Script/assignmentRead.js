$(document).ready(function () {
    // console.log('before');
    chrome.storage.sync.get(['coursesRead'], function (val) {
        var bool = val.coursesRead;
        if (bool == 'true') {
            //store num assignments for each course
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
            chrome.storage.sync.get(['enabled'], function (val) {
                if (val.enabled == 'true') {
                    chrome.storage.sync.get(['numAssigments1'], function (val) {
                        var assig1 = parseInt(val.numAssigments1)
                        chrome.storage.sync.get(['atime1'], function (val) {
                            var time1 = parseInt(val.atime1);
                            var at1 = time1 * assig1;
                    
                            chrome.storage.sync.get(['numAssigments2'], function (val) {
                                var assig2 = parseInt(val.numAssigments2)
                                chrome.storage.sync.get(['atime2'], function (val) {
                                    var time2 = parseInt(val.atime2);
                                    var at2 = assig2 * time2;
                    
                                    chrome.storage.sync.get(['numAssigments3'], function (val) {
                                        var assig3 = parseInt(val.numAssigments3)
                                        chrome.storage.sync.get(['atime3'], function (val) {
                                            var time3 = parseInt(val.atime3);
                                            var at3 = time3 * assig3;
                    
                                            chrome.storage.sync.get(['numAssigments4'], function (val) {
                                                var assig4 = parseInt(val.numAssigments4)
                                                chrome.storage.sync.get(['atime4'], function (val) {
                                                    var time4 = parseInt(val.atime4);
                                                    var at4 = time4 * assig4;
                    
                                                    chrome.storage.sync.get(['numAssigments5'], function (val) {
                                                        var assig5 = parseInt(val.numAssigments5);
                                                        chrome.storage.sync.get(['atime5'], function (val) {
                                                            var time5 = parseInt(val.atime5);
                                                            var at5 = time5 * assig5;
                    
                                                            chrome.storage.sync.get(['numAssigments6'], function (val) {
                                                                var assig6 = parseInt(val.numAssigments6);
                                                                chrome.storage.sync.get(['atime6'], function (val) {
                                                                    var time6 = parseInt(val.atime6);
                                                                    var at6 = time6 * assig6;
                    
                                                                    chrome.storage.sync.get(['numAssigments7'], function (val) {
                                                                        var assig7 = parseInt(val.numAssigments7);
                                                                        chrome.storage.sync.get(['atime7'], function (val) {
                                                                            var time7 = parseInt(val.atime7);
                                                                            var at7 = time7 * assig7;
                    
                                                                            chrome.storage.sync.get(['totalT'], function (val) {
                                                                                var totalZ = val.totalT;
                                                                                totalZ = at1 + at2 + at3 + at4 + at5 + at6 + at7;
                    
                                                                                var hrs = Math.floor(totalZ / 60);
                                                                                var min = totalZ % 60;
                                                                                console.log(hrs + "  " + min);
                                                                                var str = "You have about " + hrs + " hrs and " + min + " min of HW today! Good Luck!!   <br>  - TIMEOLOGY";
                                                                                $("#right-column").prepend('<div id="timeology time"><table> <tr> <th>Amount of HW Today</th> </tr> <tr> <td id = "time display">' + str + '</td> </tr></table></div>');
                                                                                // document.getElementById('timedisplay').innerHTML = 'You have about ' + hrs + " hrs and " + min + ' min of HW today!';
                                                                            });
                                                                        });
                    
                                                                    });
                                                                });
                    
                                                            });
                                                        });
                    
                                                    });
                                                });
                    
                                            });
                                        });
                    
                                    });
                                });
                            });
                    
                        });
                    });
                }
            });
        }
    });

});
