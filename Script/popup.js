document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("go_to_form").addEventListener("click", function () {
        //create form
        chrome.storage.sync.get(['coursesRead'], function(val){
            var read = val.coursesRead;
            if(read == "false"){
                document.getElementById("go_to_form").innerHTML = "Click me to go to Your courses page";
                chrome.tabs.create({ url: 'https://fuhsd.schoology.com/courses')
            }else{
                document.getElementById("go_to_form").innerHTML = "Click me to go to the form"
                chrome.tabs.create({ url: 'form.html')
            }
        });
    });
});