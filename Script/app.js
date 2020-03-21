$(document).ready(function(){
    debugger
    var courses = [];
    console.log('inside fn');
    var element = $('body').find(".upcoming-event");
    var allH4 = element.find('h4');
    // var count = allH4.count();
    // console.log('count is : ' + count);
    console.log(element.clone().html());
   });