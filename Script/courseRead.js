$(document).ready(function () {
    var courses = [];

    //for each courses title push into array
    $(".course-title").each(function (index, content) {
        var str = content.innerHTML;
        str = str.substring(0, str.length - 7);
        if (str != "Flex Studies") {
            courses.push(str);
        }
    });

    //store class in chrome sync storage
    chrome.storage.sync.set({ class1: courses[0].toString() });
    chrome.storage.sync.set({ class2: courses[1].toString() });
    chrome.storage.sync.set({ class3: courses[2].toString() });
    chrome.storage.sync.set({ class4: courses[3].toString() });
    chrome.storage.sync.set({ class5: courses[4].toString() });
    chrome.storage.sync.set({ class6: courses[5].toString() });
    chrome.storage.sync.set({ class7: courses[6].toString() });

    chrome.storage.sync.set({ coursesRead: 'true' }, function () {
        chrome.runtime.sendMessage({ greeting: "fuhsd url" });
    });
})