// Pure JS:
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn_submit").addEventListener("click", btnSubmitHandler);
});

function btnSubmitHandler() {

    var form = document.forms["myForm"];
    var val;
    chrome.storage.local.set({val : 0});
    value = parseInt(val);
    var data = "";x
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