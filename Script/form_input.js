// Pure JS:
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn_submit").addEventListener("click", btnSubmitHandler);
});

function btnSubmitHandler() {

    var form = document.forms["myForm"];
    var counter = 0;
    var data = "";
    var i;
    if(counter < 2){
    for (i = 0; i < form.length; i++) {
        data += form.elements[i].value + "  ";
    }
    chrome.storage.sync.set({ class1: 'lol' });
    chrome.storage.sync.set({ class2: 'lol' });
    chrome.storage.sync.set({ class3: 'lol' });
    chrome.storage.sync.set({ class4: 'lol' });
    chrome.storage.sync.set({ class5: 'lol' });
    chrome.storage.sync.set({ class6: 'lol' });
    chrome.storage.sync.set({ class7: 'lol' });
    var time= Number(form.elements[1]) + Number(form.elements[2]);
    //alert(time.toString());
    alert(form.elements[1]);
    chrome.storage.sync.set({ time1:  time.toString()});
    chrome.storage.sync.set({ time2: 'lol' });
    chrome.storage.sync.set({ time3: 'lol' });
    chrome.storage.sync.set({ time4: 'lol' });
    chrome.storage.sync.set({ time5: 'lol' });
    chrome.storage.sync.set({ time6: 'lol' });
    chrome.storage.sync.set({ time7: 'lol' });

    chrome.storage.sync.get(['time1'], function (val) {
        var value = val.time1;
        //alert(value);
    });

    alert(data);

    //reset form
    form.reset();

    alert('Thanks we got it!');
    //kill tab
    chrome.tabs.getCurrent(function (tab) {
        chrome.tabs.remove(tab.id);
    });
    counter ++;
    }else{
        alert(" You Have submitted too many times already ");
    }

}