var readCourses = false;
$(document).ready(function(){
    //debugger
    if(!readCourses){
        //chrome.tabs.create({url: 'https://fuhsd.schoology.com/courses'});
        readCourses = true;
    }
    var courses = [];
    console.log('inside fn');
    var element = $('#body').find(".upcoming-event");
    //var allH4 = element.find('h4');
    // var count = allH4.count();
    // console.log('count is : ' + count);
    console.log(element.clone().html());
   });