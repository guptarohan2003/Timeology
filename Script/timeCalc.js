document.addEventListener('DOMContentLoaded', function () {
    
    
    chrome.storage.sync.get(['time1'], function(val){
        var t1 = val.time1;
        total += (t1);
    });

    chrome.storage.sync.get(['time2'], function(val){
        var t2 = val.time2;
        total += (t2)
    });

    chrome.storage.sync.get(['time3'], function(val){
        var t3 = val.time3;
        total += (t3)
    });

    chrome.storage.sync.get(['time4'], function(val){
        var t4 = val.time4c;
        total += (t4)
    });

    chrome.storage.sync.get(['time5'], function(val){
        var t5 = val.time5;
        total += (t5)
    });

    chrome.storage.sync.get(['time6'], function(val){
        var t6 = val.time6;
        total += (t6)
    });

    // chrome.storage.sync.get(['time7'], function(val){
    //     var t7 = val.time7;
    //     total += parseInt(t7)

    // });

    document.getElementById("timedisplay").innerHTML = "you have " + total/420 + "hrs of hw left today";

});