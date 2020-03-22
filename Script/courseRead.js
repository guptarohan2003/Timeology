alert('inside courseRead');

$(document).ready(function () {
    //debugger;
    alert('inside readydoc for courses');
    var list = $("body").find(".mycourses");
    $("li").each(function(index){
        //console.log(list.get(index));
        console.log(index);
    });
    //console.log(list.clone().html());
});