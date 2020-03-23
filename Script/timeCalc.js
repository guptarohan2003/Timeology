document.addEventListener('DOMContentLoaded', function () {

    chrome.storage.sync.get(['numAssigments1'], function (val) {
        var time1 = parseInt(val.numAssigments1)
        chrome.storage.sync.get(['atime1'], function (val) {
            var t1 = parseInt(val.atime1);
            var Time1 = time1 * t1;
            chrome.storage.sync.get(['totalT'], function (val) {
                var total = parseInt(val.totalT)
                total += Time1;
                chrome.storage.sync.set({ totalT: total.toString() });
            });
        });

    });
    chrome.storage.sync.get(['numAssigments2'], function (val) {
        var time2 = parseInt(val.numAssigments2)
        chrome.storage.sync.get(['atime2'], function (val) {
            var t2 = parseInt(val.atime2);
            var Time2 = time2 * t2;
            chrome.storage.sync.get(['totalT'], function (val) {
                var total2 = parseInt(val.totalT)
                total2 += Time2;
                chrome.storage.sync.set({ totalT: total2.toString() });
            });
        });

    });
    chrome.storage.sync.get(['numAssigments3'], function (val) {
        var time3 = parseInt(val.numAssigments3)
        chrome.storage.sync.get(['atime3'], function (val) {
            var t3 = parseInt(val.atime3);
            var Time3 = time3 * t3;
            chrome.storage.sync.get(['totalT'], function (val) {
                var total3 = parseInt(val.totalT)
                total3 += Time3;
                chrome.storage.sync.set({ totalT: total3.toString() });
            });
        });

    });

    chrome.storage.sync.get(['numAssigments4'], function (val) {
        var time4 = parseInt(val.numAssigments4)
        chrome.storage.sync.get(['atime4'], function (val) {
            var t4 = parseInt(val.atime4);
            var Time4 = time4 * t4;
            chrome.storage.sync.get(['totalT'], function (val) {
                var total4 = parseInt(val.totalT)
                total4 += Time4;
                chrome.storage.sync.set({ totalT: total4.toString() });
            });
        });

    });

    chrome.storage.sync.get(['numAssigments5'], function (val) {
        var time5 = parseInt(val.numAssigments5)
        chrome.storage.sync.get(['atime5'], function (val) {
            var t5 = parseInt(val.atime5);
            var Time5 = time5 * t5;
            chrome.storage.sync.get(['totalT'], function (val) {
                var total5 = parseInt(val.totalT)
                total5 += Time5;
                chrome.storage.sync.set({ totalT: total5.toString() });
            });
        });

    });

    chrome.storage.sync.get(['numAssigments6'], function (val) {
        var time6 = parseInt(val.numAssigments6)
        chrome.storage.sync.get(['atime6'], function (val) {
            var t6 = parseInt(val.atime6);
            var Time6 = time6 * t6;
            chrome.storage.sync.get(['totalT'], function (val) {
                var total6 = parseInt(val.totalT)
                total6 += Time6;
                chrome.storage.sync.set({ totalT: total6.toString() });
            });
        });

    });

    chrome.storage.sync.get(['numAssigments7'], function (val) {
        var time7 = parseInt(val.numAssigments7)
        chrome.storage.sync.get(['atime7'], function (val) {
            var t7 = parseInt(val.atime7);
            var Time7 = time7 * t7;
            chrome.storage.sync.get(['totalT'], function (val) {
                var total7 = parseInt(val.totalT)
                total7 += Time7;
                chrome.storage.sync.set({ totalT: total7.toString() });
            });
        });

    });

    chrome.storage.sync.get(['totalT'], function (val) {
        var totalZ = parseInt(val.totalT)
        //alert(val.totalZ);
        var hrs = Math.floor(totalZ/60);
        var min = totalZ % 60;
        document.getElementById("timedisplay").innerHTML = "You have about " +  hrs + " hrs and "+ min + " min of HW today! Good Luck!!";
        chrome.storage.sync.set({totalT: '0'});

    });

});