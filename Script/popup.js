document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("go_to_form").addEventListener("click", function () {
        //create form
        chrome.tabs.create({ url: 'form.html' });
    });
});