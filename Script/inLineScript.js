chrome.storage.sync.get(['class1'], function(val){
    var value = val.class1;
    document.getElementbyId("class").innerHTML = value;
    });