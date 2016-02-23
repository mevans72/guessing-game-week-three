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

function Image(imageName) {
  this.imageName = imageName;
}

var baby = 'baby';
var banana = 'banana';
var pen = 'pen';
var shark = 'shark';

var images = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg','pen.jpg','pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg']

// var bag = document.createElement('img');
// bag.setAttribute('src', 'assets/' + images[0])

//document.body.appendChild(bag)

var stuff = [baby, banana, pen, shark];
var oneEl= document.getElementById('one');
var twoEl= document.getElementById('two');
var threeEl= document.getElementById('three');
var stuffPlaceHolder = [];
var stuffSeen = [];
var stuffPushed = [];
var stuffSeenMulti = [];
var timesRan = [];
var imgEls = [];

function randomImgs() {
  for (var i = 0; i < 3; i++) {
    //generate random image for index1
    var index1 = Math.floor(Math.random() * stuff.length);
    //Change the index1 to oneEl HTML element
    oneEl.textContent = stuff[index1];
    //generate random image for index2
    var index2 = Math.floor(Math.random() * stuff.length);
    //If index1 != index2, change index2 to twoEl HTML element
    //test vs index1; re--roll if the same
    if(index1 != index2) {
      twoEl.textContent = stuff[index2];
    }
    //While index1 === index2, go random!
    while(index1 === index2){
      var index2 = Math.floor(Math.random() * stuff.length);
    //do same other test
    }
    var index3 = Math.floor(Math.random() * stuff.length);
    //If index3 != index2 and != index1, Change the index3 to threeEl HTML element
    if(index3 != index2 && index3 != index1) {
      threeEl.textContent = stuff[index3];
    }
    //While index3 === index2 or index1, go random!
    while(index3 === index2 || index3 === index1) {
      index3 = Math.floor(Math.random() * stuff.length);
    }
  }
  // Keep track of stuffSeen by pushing this rounds/forloops stuff and log the all of the stuff seen to the console
  stuffSeen.push(stuff[index1],stuff[index2],stuff[index3]);
  console.log('stuffSeen: ' + '[ ' + stuffSeen + ' ]');
};
randomImgs();


///working
//begin dunkins example
// var bag = document.createElement('img');
// bag.setAttribute('src', 'assets/' + images[0])
//end dunkins example

function genImgEls(){
  for (var i=0; i < images.length; i++) {
    var imageName = document.createElement('img');
    imageName.setAttribute('src', 'assets/' + images[i]);
    imgEls.push(imageName);
  }
};

//   var trEL = document.createElement('tr');
//   table.appendChild(trEL);
//   for (var j=0; j < imageNames[i].length; j++){
//     var tdEl = document.createElement('td');
//     tdEl.textContent = imageNames[i][j];
//     trEL.appendChild(tdEl);
//   }
// }
