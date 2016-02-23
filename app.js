// var baby = 'baby';
// var banana = 'banana';
// var pen = 'pen';
// var shark = 'shark';
//
// var stuff = [baby, banana, pen, shark];
//
// var oneEl = document.getElementById('one');
// var twoEl = document.getElementById('two');
// var threeEl = document.getElementById('three');
//
// function randomImgs(){
//   for (var i = 0; i < 3; i++) {
//     var index = Math.floor(Math.random() * stuff.length);
//     console.log(stuff[index]);
//     oneEl.textContent = stuff[index];
//     var index1 = Math.floor(Math.random() * stuff.length);
//     //test vs index1; re--roll if the same
//     twoEl.textContent = stuff[index];
//     var index2 = Math.floor(Math.random() * stuff.length);
//     threeEl.textContent = stuff[index];
//     //do same other test
//     var index3 = Math.floor(Math.random() * stuff.length);
//   }
// };
//
// randomImgs();

var baby = 'baby';
var banana = 'banana';
var pen = 'pen';
var shark = 'shark';

var stuff = [baby, banana, pen, shark];
var oneEl= document.getElementById('one');
var twoEl= document.getElementById('two');
var threeEl= document.getElementById('three');
var stuffPlaceHolder = [];
var stuffSeen = [];
var stuffPushed = [];
var stuffSeenMulti = [];
var timesRan = [];

function randomImgs() {
  for (var i = 0; i < 3; i++) {
    //generate random image for index1
    var index1 = Math.floor(Math.random() * stuff.length);
    //append index1 to oneEl HTML element
    oneEl.textContent = stuff[index1];
    //generate random image for index2
    var index2 = Math.floor(Math.random() * stuff.length);
    //if index1 != index2,
    //test vs index1; re--roll if the same
    if(index1 != index2) {
      twoEl.textContent = stuff[index2];
    } while(index1 === index2){
      var index2 = Math.floor(Math.random() * stuff.length);
    //do same other test
    }
    var index3 = Math.floor(Math.random() * stuff.length);

    if(index3 != index2 && index3 != index1) {
      threeEl.textContent = stuff[index3];
    } while(index3 === index2 && index3 === index1) {
      index3 = Math.floor(Math.random() * stuff.length);
    }
  }
  // console.log('stuffSeen: ' + stuff[index1]);
  // console.log(oneEl.textContent);
  stuffSeen.push(stuff[index1],stuff[index2],stuff[index3]) + stuffPlaceHolder.push(index1,index2,index3);
  stuffPlaceHolder.pop(index1,index2,index3);
  console.log('stuffSeen: ' + '[ ' + stuffSeen + '[ ');
}
randomImgs();
// for (var i=0; i < tableData.length; i++) {
//   var trEL = document.createElement('tr');
//   table.appendChild(trEL);
//   for (var j=0; j < tableData[i].length; j++){
//     var tdEl = document.createElement('td');
//     tdEl.textContent = tableData[i][j];
//     trEL.appendChild(tdEl);
//   }
// }
