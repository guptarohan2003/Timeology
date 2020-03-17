// Pure JS:
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn_submit").addEventListener("click", btnSubmitHandler);
});

function btnSubmitHandler() {

    var form = document.forms["myForm"];
    chrome.storage.local.set({val : 1});
    value = parseInt(val);
    var data = "";
    var i;
    if(value < 3){
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
    value ++;
    }else{
        alert(" You Have submitted too many times already ");
    }

}