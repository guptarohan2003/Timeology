$(document).ready(function () {
    //
    //courses array
    chrome.storage.sync.get(['coursesRead'], function (val) {
        var haveRead = val.coursesRead;
        if (haveRead == "false") {
            var courses = [];

            //for each courses title push into array
            $(".course-title").each(function (index, content) {
                var str = content.innerHTML;
                str = str.substring(0, str.length - 7);
                courses.push(str);
            });

            //for each print courses content
            // courses.forEach(function (item, index) {
            //     console.log(item);
            // });

            //store class in chrome sync storage
            chrome.storage.sync.set({ class1: courses[0].toString() });
            chrome.storage.sync.set({ class2: courses[1].toString() });
            chrome.storage.sync.set({ class3: courses[2].toString() });
            chrome.storage.sync.set({ class4: courses[3].toString() });
            chrome.storage.sync.set({ class5: courses[4].toString() });
            chrome.storage.sync.set({ class6: courses[5].toString() });
            chrome.storage.sync.set({ class7: courses[6].toString() });

            //console.log every class name
            chrome.storage.sync.get(['class1'], function (value) {
                console.log(value.class1);
            });
            chrome.storage.sync.get(['class2'], function (value) {
                console.log(value.class2);
            });
            chrome.storage.sync.get(['class3'], function (value) {
                console.log(value.class3);
            });
            chrome.storage.sync.get(['class4'], function (value) {
                console.log(value.class4);
            });
            chrome.storage.sync.get(['class5'], function (value) {
                console.log(value.class5);
            });
            chrome.storage.sync.get(['class6'], function (value) {
                console.log(value.class6);
            });
            chrome.storage.sync.get(['class7'], function (value) {
                console.log(value.class7);
            });

            chrome.storage.sync.set({ coursesRead: 'true' }, function () {
                alert('Thanks, we got your courses!! \nPS: Yes it\'s supposed to be this fast!');
                chrome.runtime.sendMessage({greeting: "delete tab"});
            });
        }
    });

})