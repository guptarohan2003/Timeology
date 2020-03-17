// Pure JS:
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn_submit").addEventListener("click", btnSubmitHandler);
});

function btnSubmitHandler() {

    var form = document.forms["myForm"];
    var counter = 0;
    var data = "";
    var i;
    //if(counter < 2){
    for (i = 0; i < form.length; i++) {
        data += form.elements[i].value + "  ";
    }
    chrome.storage.sync.set({ class1: form.elements[0].value.toString() });
    chrome.storage.sync.set({ class2: form.elements[3].value.toString() });
    chrome.storage.sync.set({ class3: form.elements[6].value.toString() });
    chrome.storage.sync.set({ class4: form.elements[9].value.toString() });
    chrome.storage.sync.set({ class5: form.elements[12].value.toString() });
    chrome.storage.sync.set({ class6: form.elements[15].value.toString() });
    //chrome.storage.sync.set({ class7: form.elements[0].value.toString() });

    var time1 = parseInt(form.elements[1].value)*60 + parseInt(form.elements[2].value);
    chrome.storage.sync.set({ time1:  time1.toString()});
    var time2 = parseInt(form.elements[4].value)*60 + parseInt(form.elements[5].value);
    chrome.storage.sync.set({ time2: time2.toString() });
    var time3 = parseInt(form.elements[7].value)*60 + parseInt(form.elements[8].value);
    chrome.storage.sync.set({ time3: time3.toString() });
    var time4 = parseInt(form.elements[10].value)*60 + parseInt(form.elements[11].value);
    chrome.storage.sync.set({ time4: time4.toString() });
    var time5 = parseInt(form.elements[13].value)*60 + parseInt(form.elements[14].value);
    chrome.storage.sync.set({ time5: time5.toString() });
    var time6 = parseInt(form.elements[16].value)*60 + parseInt(form.elements[17].value);
    chrome.storage.sync.set({ time6: time6.toString() });
    // var time7 = parseInt(form.elements[20].value)*60 + parseInt(form.elements[21].value);
    // chrome.storage.sync.set({ time7: time7.toString() });

    alert(data);

    //reset form
    form.reset();

    alert('Thanks we got it!');
    //kill tab
    chrome.tabs.getCurrent(function (tab) {
        chrome.tabs.remove(tab.id);
    });

}