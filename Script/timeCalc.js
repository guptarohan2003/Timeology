document.addEventListener('DOMContentLoaded', function () {

    // chrome.storage.sync.get(['time1numAssigments1'], function (val) {
    //     var time1 = parseInt(val.time1numAssigments1)
    //     chrome.storage.sync.get(['atime1'], function (val) {
    //         var t1 = parseInt(val.atime1);
    //         var Time1 = time1 * t1;
    //         chrome.storage.sync.get(['totalT'], function (val) {
    //             var total = parseInt(val.totalT)
    //             total += Time1;
    //             chrome.storage.sync.set({ totalT: total.toString() });
    //         });
    //     });

    // });
    // chrome.storage.sync.get(['time1numAssigments2'], function (val) {
    //     var time2 = parseInt(val.time1numAssigments2)
    //     chrome.storage.sync.get(['atime2'], function (val) {
    //         var t2 = parseInt(val.atime2);
    //         var Time2 = time2 * t2;
    //         chrome.storage.sync.get(['totalT'], function (val) {
    //             var total2 = parseInt(val.totalT)
    //             total2 += Time2;
    //             chrome.storage.sync.set({ totalT: total2.toString() });
    //         });
    //     });

    // });
    chrome.storage.sync.get(['numAssigments5'], function (val) {
        //alert(val.numAssigments5);
        var time1 = parseInt(val.numAssigments5)
        chrome.storage.sync.get(['atime5'], function (val) {
            var t1 = parseInt(val.atime5);
            var Time1 = time1 * t1;
            chrome.storage.sync.get(['totalT'], function (val) {
                var total = parseInt(val.totalT)
                total += Time1;
                chrome.storage.sync.set({ totalT: total.toString() });
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