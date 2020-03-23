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
    // chrome.storage.sync.set({ time1: 'lol' });
    // chrome.storage.sync.set({ time2: 'lol' });
    // chrome.storage.sync.set({ time3: 'lol' });
    // chrome.storage.sync.set({ time4: 'lol' });
    // chrome.storage.sync.set({ time5: 'lol' });
    // chrome.storage.sync.set({ time6: 'lol' });
    // chrome.storage.sync.set({ time7: 'lol' });

    //how to get key value
    // chrome.storage.sync.get(['class1'], function(val){
    //     var value = val.class1;
    //     alert(value);
    // });
    
    chrome.storage.sync.set({enabled: "false"});
    chrome.storage.sync.set({ coursesRead: 'false' });
    chrome.storage.sync.set({ totalT: "0"});

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

// document.addEventListener('DOMContentLoaded', function () {
//     //try {
//     document.getElementById("enableTimeology").innerHTML == 'Enable Timeology' ? disableTimeology() : enableTimeology();
//     //}
//     document.getElementById("enableTimeology").addEventListener("click", function () {
//         if(document.getElementById("enableTimeology").innerHTML == 'Enable Timeology'){
//             enableTimeology();
//             document.getElementById("enableTimeology").innerHTML = "Disable Timeology";
//         } else {
//             disableTimeology();
//             document.getElementById("enableTimeology").innerHTML = "Enable Timeology";
//         }
//         chrome.tabs.reload();
//     });

//     document.getElementById("go_to_form").addEventListener("click", function () {
//         //create form
//         chrome.storage.sync.get(['coursesRead'], function(val){
//             var read = val.coursesRead;
//             if(read == "false"){
//                 document.getElementById("go_to_form").innerHTML = "Click me to go to Your courses page so we can get your courses!";
//                 chrome.tabs.create({ url: "https://fuhsd.schoology.com/courses" });
//             }else{
//                 document.getElementById("go_to_form").innerHTML = "Click me to go to the form";
//                 chrome.tabs.create({ url: "form.html" });
//             }
//         });
//     });
// });

// function enableTimeology(){
//     // document.getElementById("time").style.display = "inline";
//     document.getElementById("timedisplay").style.display = "inline";
//     document.getElementById("go_to_form").style.display = "inline";
// }

// function disableTimeology(){
//     document.getElementById("go_to_form").style.display = "none";
//     document.getElementById("timedisplay").style.display = "none";
//     // document.getElementById("time").style.display = "none";
// }

