document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get(['class1'], function(val){
        var value = val.class1;
        document.getElementById("A").innerHTML = value;
    });

    chrome.storage.sync.get(['class2'], function(val){
        var value = val.class2;
        document.getElementById("B").innerHTML = value;
    });

    chrome.storage.sync.get(['class3'], function(val){
        var value = val.class3;
        document.getElementById("C").innerHTML = value;
    });

    chrome.storage.sync.get(['class4'], function(val){
        var value = val.class4;
        document.getElementById("D").innerHTML = value;
    });

    chrome.storage.sync.get(['class5'], function(val){
        var value = val.class5;
        document.getElementById("E").innerHTML = value;
    });

    chrome.storage.sync.get(['class6'], function(val){
        var value = val.class6;
        document.getElementById("F").innerHTML = value;
    });

    chrome.storage.sync.get(['class7'], function(val){
        var value = val.class7;
        document.getElementById("G").innerHTML = value;
    });

});
