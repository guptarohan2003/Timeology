// Pure JS:
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn_submit").addEventListener("click", btnSubmitHandler);
});

// The handler also must go in a .js file
function btnSubmitHandler() {
    // alert('btnSubmitHandler called');

    var x = document.forms["myForm"];
    var data = "";
    var i;
    for (i = 0; i < x.length; i++) {
        data += x.elements[i].value + "  ";

    }
    alert(data);
}