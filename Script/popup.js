document.addEventListener('DOMContentLoaded', function () {
    // chrome.storage.sync.get(['coursesRead'], function (val) {
    //     var read = val.coursesRead;
    //     if (read == "true") {
    //         document.getElementById("go_to_form").innerHTML = "Click me to go to the form";
    //     }
    // });
    chrome.storage.sync.get(['enabled'], function (val) {
        var value = val.enabled;
        if (value == 'true') {
            document.getElementById("enableTimeology").innerHTML = 'Disable Timeology';
            enableTimeology();
        } else {
            document.getElementById("enableTimeology").innerHTML = "Enable Timeology";
            disableTimeology();
        }
    });

    document.getElementById("enableTimeology").addEventListener("click", function () {
        if (document.getElementById("enableTimeology").innerHTML == 'Enable Timeology') {
            chrome.storage.sync.get(['coursesRead'], function (val) {
                if (val.coursesRead == 'false') {
                    chrome.runtime.sendMessage({ greeting: "courses url" });
                }
                enableTimeology();
                document.getElementById("enableTimeology").innerHTML = "Disable Timeology";
                chrome.storage.sync.set({ enabled: "true" });
                chrome.tabs.reload();
            });
        } else {
            disableTimeology();
            document.getElementById("enableTimeology").innerHTML = "Enable Timeology";
            chrome.storage.sync.set({ enabled: "false" });
            chrome.tabs.reload();
        }
    });
    var ele = document.getElementById("go_to_form");
    if(ele){
        ele.addEventListener("click", function () {
            chrome.tabs.create({ url: "form.html" });
        });
    }
    
});


function enableTimeology() {
    document.getElementById("timedisplay").style.display = "inline";
    document.getElementById("go_to_form").style.display = "inline";
}

function disableTimeology() {
    document.getElementById("go_to_form").style.display = "none";
    document.getElementById("timedisplay").style.display = "none";
}