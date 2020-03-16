alert('gvc');
// document.createElement(<button>sdd</button>, function(){
//     alert('sdfsd');
// });
// Pure JS:
document.addEventListener('DOMContentLoaded', function() {
    //document.getElementById('upcoming-list').addEventListener(undefined, handler);
    // var div_obj = document.getElementsByClassName('upcoming-list'); // .innerHTML = 'lets go';
    // alert(div_obj);

    //var objectHTMLCollection = document.getElementsByClassName("item-list");
    var x = document.getElementById('edge-assoc-12905876540');
    alert(x);
    // var string = [].map.call( objectHTMLCollection, function(node){
    //     return node.textContent || node.innerText || "";
    // }).join("");
    // alert(string);
    // var myJSON = JSON.stringify(objectHTMLCollection);
    // alert(myJSON);


    // var genres = objectHTMLCollection.map(function(el){
    //     return el.value;
    // }).join(', ');
    // alert(genres);

  });
   
  // The handler also must go in a .js file
  function handler() {
    alert('sdfd');
  }
  chrome.storage.sync.set({key: value}, function() {
    console.log('Value is set to ' + value);
  });

  chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });

  function saveChanges() {
    // Get a value saved in a form.
    var theValue = textarea.value;
    // Check that there's some code there.
    if (!theValue) {
      message('Error: No value specified');
      return;
    }
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({'value': theValue}, function() {
      // Notify that we saved.
      message('Settings saved');
    });
  }
  