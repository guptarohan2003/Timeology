document.addEventListener('DOMContentLoaded', function () {
    //store tabid

    console.log('DOMContentLoaded')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        debugger
        var currTab = tabs[0];
        if (currTab) { 
          chrome.storage.sync.set({ tabId: currTab.id.toString() });           
        }
      });

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

            // document.body.innerHTML += '<dialog>This is a dialog.<br><button>Close</button></dialog>';
            // var dialog = document.querySelector("dialog")
            // dialog.querySelector("button").addEventListener("click", function() {
            //     dialog.close()
            // })
            // dialog.showModal()
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