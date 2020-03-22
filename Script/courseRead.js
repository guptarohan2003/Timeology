$(document).ready(function () {
    //courses array
    var courses = [];

    //for each courses title push into array
    $(".course-title").each(function(index, content){
        var str = content.innerHTML;
        courses.push(str);
    });

    //for each print courses content
    courses.forEach(function(item, index){
        console.log(item);
    });
    //console.log();
    var str = courses[0].toString();
    chrome.storage.sync.set({ class1:  str});
    chrome.storage.sync.set({ class2: 'lol' });
    chrome.storage.sync.set({ class3: 'lol' });
    chrome.storage.sync.set({ class4: 'lol' });
    chrome.storage.sync.set({ class5: 'lol' });
    chrome.storage.sync.set({ class6: 'lol' });
    chrome.storage.sync.set({ class7: 'lol' });

    chrome.storage.sync.get(['class1'], function(value){
        console.log(value);
    })
    //console.log();
});