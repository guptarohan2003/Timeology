// Pure JS:
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn_submit").addEventListener("click", btnSubmitHandler);
});


function btnSubmitHandler() {

    chrome.storage.sync.get(['numSubmissions'], function (result) {
        var counter = result.numSubmissions;
        var counterInt = parseInt(counter);
        
        // enter logic here
        if(counterInt < 7){
            var form = document.forms["myForm"];
            var data = "";
            var i;
            for (i = 0; i < form.length; i++) {
                data += form.elements[i].value + "  ";
            }  
            alert(data + "  " + counterInt); 
            chrome.storage.sync.set({numSubmissions: counterInt + 1});
        } else {
            alert('No more submissions allowed.');
        }

    });
}