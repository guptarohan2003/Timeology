// Pure JS:
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn_submit").addEventListener("click", btnSubmitHandler);
});


// The handler also must go in a .js file
function btnSubmitHandler() {

    var c = -1;
    chrome.storage.sync.get(['numSubmissions'], function (result) {
        //alert('result is : ' + result.numSubmissions);
        var counter = result.numSubmissions;
        alert(counter);
        var counterInt = parseInt(counter);

        // enter logic here

        chrome.storage.sync.set({numSubmissions: counterInt + 1}, function () {
            // chrome.storage.sync.get(['numSubmissions'], function (result) {
            //     alert('result is : ' + result.numSubmissions);
            // });
        });

    });

        // console.log('Value currently is ' + result.key);

        // if (numSubmissions < 8) {
        //     var x = document.forms["myForm"];
        //     var data = "";
        //     var i;
        //     for (i = 0; i < x.length; i++) {
        //         data += x.elements[i].value + "  ";

        //     }   
        //     numSubmissions++;        
        // }
       


    // numSubmissions = 5;
}