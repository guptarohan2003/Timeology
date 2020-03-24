chrome.runtime.onInstalled.addListener(function (details) {

    //7 classes
    // chrome.storage.sync.set({ class1: 'lol' });
    // chrome.storage.sync.set({ class2: 'lol' });
    // chrome.storage.sync.set({ class3: 'lol' });
    // chrome.storage.sync.set({ class4: 'lol' });
    // chrome.storage.sync.set({ class5: 'lol' });
    // chrome.storage.sync.set({ class6: 'lol' });
    // chrome.storage.sync.set({ class7: 'lol' });

    //7 times
    chrome.storage.sync.set({ atime1: '30' });
    chrome.storage.sync.set({ atime2: '30' });
    chrome.storage.sync.set({ atime3: '30' });
    chrome.storage.sync.set({ atime4: '30' });
    chrome.storage.sync.set({ atime5: '30' });
    chrome.storage.sync.set({ atime6: '30' });
    chrome.storage.sync.set({ atime7: '30' });

    //how to get key value
    // chrome.storage.sync.get(['class1'], function(val){
    //     var value = val.class1;
    //     // alert(value);
    // });

    chrome.storage.sync.set({ enabled: "false" });
    chrome.storage.sync.set({ coursesRead: 'false' });
    chrome.storage.sync.set({ totalT: "0" });

    // chrome.tabs.create({ url: 'https://fuhsd.schoology.com/courses' });

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

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.greeting == "delete tab") {
        chrome.tabs.remove(sender.tab.id);
    }
    if (request.greeting == "fuhsd url") {
        //chrome.tabs.remove(sender.tab.id);
        chrome.tabs.update(sender.tab.id, { url: 'https://fuhsd.schoology.com' });
    }
    if (request.greeting == "courses url") {
        chrome.tabs.update({ url: 'https://fuhsd.schoology.com/courses' });
    }
    if (request.greeting == "reload tab") {
        // alert('reload url');        
        chrome.storage.sync.get(['tabId'], function (val) {
            // alert(val.tabId);  
            chrome.tabs.reload(+val.tabId);
        });
    }
});

chrome.tabs.onUpdated.addListener(function(tab){
    var str = tab.url;
    console.log('url:' + str);
    if(str == 'https://fuhsd.schoology.com/courses'){
        chrome.storage.tabs.getCurrent(function (tab) {
            var str = tab.id;
            chrome.storage.sync.set({ tabId: str.toString() });
            console.log(str);
        });
    }
});
