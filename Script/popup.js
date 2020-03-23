document.addEventListener('DOMContentLoaded', function () {
    //try {
    document.getElementById("enableTimeology").innerHTML == 'Enable Timeology' ? disableTimeology() : enableTimeology();
    //}
    document.getElementById("enableTimeology").addEventListener("click", function () {
        if(document.getElementById("enableTimeology").innerHTML == 'Enable Timeology'){
            enableTimeology();
            document.getElementById("enableTimeology").innerHTML = "Disable Timeology";
        } else {
            disableTimeology();
            document.getElementById("enableTimeology").innerHTML = "Enable Timeology";
        }
    });

    document.getElementById("go_to_form").addEventListener("click", function () {
        //create form
        chrome.storage.sync.get(['coursesRead'], function(val){
            var read = val.coursesRead;
            if(read == "false"){
                document.getElementById("go_to_form").innerHTML = "Click me to go to Your courses page so we can get your courses!";
                chrome.tabs.create({ url: "https://fuhsd.schoology.com/courses" });
            }else{
                document.getElementById("go_to_form").innerHTML = "Click me to go to the form";
                chrome.tabs.create({ url: "form.html" });
            }
        });
    });
});

function enableTimeology(){
    // document.getElementById("time").style.display = "inline";
    document.getElementById("timedisplay").style.display = "inline";
    document.getElementById("go_to_form").style.display = "inline";
}

function disableTimeology(){
    document.getElementById("go_to_form").style.display = "none";
    document.getElementById("timedisplay").style.display = "none";
    // document.getElementById("time").style.display = "none";
}