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
    alert(data);

    //reset form
    form.reset();
    
    alert('Thanks we got it!');
    chrome.tabs.getCurrent(function (tab) {
        chrome.tabs.remove(tab.id);
    });

}