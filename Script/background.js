
'use strict';
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({numSubmissions: '0' }, function () {
        //alert('numSubmissions is : ' + );
    });
})