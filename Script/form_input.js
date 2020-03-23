// Pure JS:
document.addEventListener('DOMContentLoaded', function () {
        document.getElementById("btn_submit").addEventListener("click", btnSubmitHandler);

});

function btnSubmitHandler() {

    var form = document.forms["myForm"];
 
    var data = "";
    var i;

    for (i = 0; i < form.length; i++) {
        data += form.elements[i].value + "  ";
    }

    // chrome.storage.sync.set({ class1: form.elements[0].value.toString() });
    // chrome.storage.sync.set({ class2: form.elements[3].value.toString() });
    // chrome.storage.sync.set({ class3: form.elements[6].value.toString() });
    // chrome.storage.sync.set({ class4: form.elements[9].value.toString() });
    // chrome.storage.sync.set({ class5: form.elements[12].value.toString() });
    // chrome.storage.sync.set({ class6: form.elements[15].value.toString() });
    //chrome.storage.sync.set({ class7: form.elements[0].value.toString() });

    // storing all the assignment times
    var atime1 = parseInt(form.elements[0].value) * 60 + parseInt(form.elements[1].value);
    chrome.storage.sync.set({ atime1: atime1.toString() });
    var atime2 = parseInt(form.elements[4].value) * 60 + parseInt(form.elements[5].value);
    chrome.storage.sync.set({ atime2: atime2.toString() });
    var atime3 = parseInt(form.elements[8].value) * 60 + parseInt(form.elements[9].value);
    chrome.storage.sync.set({ atime3: atime3.toString() });
    var atime4 = parseInt(form.elements[12].value) * 60 + parseInt(form.elements[13].value);
    chrome.storage.sync.set({ atime4: atime4.toString() });
    var atime5 = parseInt(form.elements[16].value) * 60 + parseInt(form.elements[17].value);
    chrome.storage.sync.set({ atime5: atime5.toString() });
    var atime6 = parseInt(form.elements[20].value) * 60 + parseInt(form.elements[21].value);
    chrome.storage.sync.set({ atime6: atime6.toString() });
    var atime7 = parseInt(form.elements[24].value)*60 + parseInt(form.elements[25].value);
    chrome.storage.sync.set({ atime7: atime7.toString() });

    //storing all the project times
    var ptime1 = parseInt(form.elements[2].value) * 60 + parseInt(form.elements[3].value);
    chrome.storage.sync.set({ ptime1: ptime1.toString() });
    var ptime2 = parseInt(form.elements[6].value) * 60 + parseInt(form.elements[7].value);
    chrome.storage.sync.set({ ptime2: ptime2.toString() });
    var ptime3 = parseInt(form.elements[10].value) * 60 + parseInt(form.elements[11].value);
    chrome.storage.sync.set({ ptime3: ptime3.toString() });
    var ptime4 = parseInt(form.elements[14].value) * 60 + parseInt(form.elements[15].value);
    chrome.storage.sync.set({ ptime4: ptime4.toString() });
    var ptime5 = parseInt(form.elements[18].value) * 60 + parseInt(form.elements[19].value);
    chrome.storage.sync.set({ ptime5: ptime5.toString() });
    var ptime6 = parseInt(form.elements[22].value) * 60 + parseInt(form.elements[23].value);
    chrome.storage.sync.set({ ptime6: ptime6.toString() });
    var ptime7 = parseInt(form.elements[26].value)*60 + parseInt(form.elements[27].value);
    chrome.storage.sync.set({ ptime7: ptime7.toString() });

    //alert(data);

    //reset form
    form.reset();

    alert('Thanks we got it!');
    //kill tab
    chrome.tabs.getCurrent(function (tab) {
        chrome.tabs.remove(tab.id);
    });
}