
'use strict';
chrome.runtime.onInstalled.addListener(function () {
    // chrome.storage.sync.set({ numSubmissions: '0' }, function () {
    //     //alert('numSubmissions is : ' + );
    // });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'fuhsd.schoology.com' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
