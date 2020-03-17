// Pure JS:
document.addEventListener('DOMContentLoaded', function () {

   if(chrome.getcookie("blah")){ 
    document.getElementById("btn_submit").addEventListener("click", btnSubmitHandler);
    chrome.setcookie("blah") == " ";
   }
});


function btnSubmitHandler() {

    chrome.storage.sync.get(['numSubmissions'], function (result) {
        var counter = result.numSubmissions;
        // enter logic here
            var form = document.forms["myForm"];
            var data = "";
            var i;
            for (i = 0; i < form.length; i++) {
                data += form.elements[i].value + "  ";
            }  
            alert(data); 

    });
}