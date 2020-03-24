
// // code snippets

// //remove element

// // debugger
// // var delete_div = $('#timeology time');
// // if (delete_div){
// //     console.log('delete_div removed');
// //     console.log(delete_div);
// //     delete_div.remove();
// // }

// // #############


// chrome.storage.sync.get(['numAssigments1'], function (val) {
//     var assig1 = parseInt(val.numAssigments1)
//     chrome.storage.sync.get(['atime1'], function (val) {
//         var time1 = parseInt(val.atime1);
//         var at1 = time1 * assig1;

//         chrome.storage.sync.get(['numAssigments2'], function (val) {
//             var assig2 = parseInt(val.numAssigments2)
//             chrome.storage.sync.get(['atime2'], function (val) {
//                 var time2 = parseInt(val.atime2);
//                 var at2 = assig2 * time2;

//                 chrome.storage.sync.get(['numAssigments3'], function (val) {
//                     var assig3 = parseInt(val.numAssigments3)
//                     chrome.storage.sync.get(['atime3'], function (val) {
//                         var time3 = parseInt(val.atime3);
//                         var at3 = time3 * assig3;

//                         chrome.storage.sync.get(['numAssigments4'], function (val) {
//                             var assig4 = parseInt(val.numAssigments4)
//                             chrome.storage.sync.get(['atime4'], function (val) {
//                                 var time4 = parseInt(val.atime4);
//                                 var at4 = time4 * assig4;

//                                 chrome.storage.sync.get(['numAssigments5'], function (val) {
//                                     var assig5 = parseInt(val.numAssigments5);
//                                     // alert(time5);
//                                     chrome.storage.sync.get(['atime5'], function (val) {
//                                         var time5 = parseInt(val.atime5);
//                                         var at5 = time5 * assig5;

//                                         chrome.storage.sync.get(['numAssigments6'], function (val) {
//                                             var assig6 = parseInt(val.numAssigments6);
//                                             //alert(time5);
//                                             chrome.storage.sync.get(['atime6'], function (val) {
//                                                 var time6 = parseInt(val.atime6);
//                                                 var at6 = time6 * assig6;

//                                                 chrome.storage.sync.get(['numAssigments7'], function (val) {
//                                                     var assig7 = parseInt(val.numAssigments7);
//                                                     // alert(time5);
//                                                     chrome.storage.sync.get(['atime7'], function (val) {
//                                                         var time7 = parseInt(val.atime7);
//                                                         var at7 = time7 * assig7;

//                                                         chrome.storage.sync.get(['totalT'], function (val) {
//                                                             var totalZ = val.totalT;
//                                                             totalZ = at1 + at2 + at3 + at4 + at5 + at6 + at7;

//                                                             var hrs = Math.floor(totalZ / 60);
//                                                             var min = totalZ % 60;
//                                                             console.log(hrs + "  " + min);
//                                                             var str = "You have about " + hrs + " hrs and " + min + " min of HW today! Good Luck!!";
//                                                             $("#right-column").prepend('<div id="timeology time"><table> <tr> <th>Amount of HW Today</th> </tr> <tr> <td id = "time display">' + str + '</td> </tr></table></div>');
//                                                         });
//                                                     });

//                                                 });
//                                             });

//                                         });
//                                     });

//                                 });
//                             });

//                         });
//                     });

//                 });
//             });
//         });

//     });
// });

// function total1() {
//     chrome.storage.sync.get(['numAssigments1'], function (val) {
//         var assig1 = parseInt(val.numAssigments1)
//         chrome.storage.sync.get(['atime1'], function (val) {
//             var time1 = parseInt(val.atime1);
//             var at1 = time1 * assig1;
//             return at1 + total2();
//         });
//     });
// }

// function total2() {
//     chrome.storage.sync.get(['numAssigments2'], function (val) {
//         var assig2 = parseInt(val.numAssigments2)
//         chrome.storage.sync.get(['atime2'], function (val) {
//             var time2 = parseInt(val.atime2);
//             var at2 = assig2 * time2;

//             return at2 + total3();
//         });
//     });
// }
// function total3() {
//     chrome.storage.sync.get(['numAssigments3'], function (val) {
//         var assig3 = parseInt(val.numAssigments3)
//         chrome.storage.sync.get(['atime3'], function (val) {
//             var time3 = parseInt(val.atime3);
//             var at3 = time3 * assig3;

//             return at3 + total4();
//         });
//     });
// }
// function total4() {
//     chrome.storage.sync.get(['numAssigments4'], function (val) {
//         var assig4 = parseInt(val.numAssigments4)
//         chrome.storage.sync.get(['atime4'], function (val) {
//             var time4 = parseInt(val.atime4);
//             var at4 = time4 * assig4;

//             return at4 + total5();
//         });
//     });
// }
// function total5() {
//     chrome.storage.sync.get(['numAssigments5'], function (val) {
//         var assig5 = parseInt(val.numAssigments5);
//         // alert(time5);
//         chrome.storage.sync.get(['atime5'], function (val) {
//             var time5 = parseInt(val.atime5);
//             var at5 = time5 * assig5;

//             return at5 + total6();
//         });

//     });
// }
// function total6() {
//     chrome.storage.sync.get(['numAssigments6'], function (val) {
//         var assig6 = parseInt(val.numAssigments6);
//         //alert(time5);
//         chrome.storage.sync.get(['atime6'], function (val) {
//             var time6 = parseInt(val.atime6);
//             var at6 = time6 * assig6;

//             return at6 + total7();
//         });

//     });
// }
// function total7() {
//     chrome.storage.sync.get(['numAssigments7'], function (val) {
//         var assig7 = parseInt(val.numAssigments7);
//         // alert(time5);
//         chrome.storage.sync.get(['atime7'], function (val) {
//             var time7 = parseInt(val.atime7);
//             var at7 = time7 * assig7;

//             return at7;
//         });

//     });
// }

