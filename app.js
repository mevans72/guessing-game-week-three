'use strict';

var imageDataArray = [];

function Image(imageID,imageDescription,imageSrc) {
  this.imageID = imageID;
  this.imageDescription = imageDescription;
  this.imageSrc = imageSrc;
  this.timesShown = 0;
  this.timesClicked = 0;
  imageDataArray.push(this);
}

var bag = new Image('bag', 'R2D2 Luggage', 'assets/bag.jpg');
var banana = new Image('banana', 'Banana Cutter', 'assets/banana.jpg');
var bathroom = new Image('bathroom', 'iPad Bathroom Stand', 'assets/bathroom.jpg');
var boots = new Image('boots', 'Rain Boots', 'assets/boots.jpg');
var breakfast = new Image('breakfast', 'All-in-one Breakfast Maker', 'assets/breakfast.jpg');
var bubblegum = new Image('bubblegum', 'Meatball Bubblegum', 'assets/bubblegum.jpg');
var chair = new Image('chair', 'Chair', 'assets/chair.jpg');
var cthulhu = new Image('cthulhu', 'Monster in Action', 'assets/cthulhu.jpg');
var dogDuck = new Image('dogDuck', 'Duck Dog', 'assets/dogDuck.jpg');
var dragon = new Image('dragon', 'Dragon Meat', 'assets/dragon.jpg');
var pen = new Image('pen', 'Pen Utensils', 'assets/pen.jpg');
var petSweep = new Image('petSweep', 'Pet Sweep', 'assets/petSweep.jpg');
var scissors = new Image('scissors', 'Pizza Scissors', 'assets/scissors.jpg');
var shark = new Image('shark', 'Shark Bag', 'assets/shark.jpg');
var sweep = new Image('sweep', 'Baby Sweep', 'assets/sweep.jpg');
var tauntaun = new Image('tauntaun', 'Tauntaun', 'assets/tauntaun.jpg');
var unicorn = new Image('unicorn', 'Unicorn Meat', 'assets/unicorn.jpg');
var usb = new Image('usb', 'Tentacle USB', 'assets/usb.jpg');
var waterCan = new Image('waterCan', 'Water Can', 'assets/waterCan.jpg');
var wineGlass = new Image('wineGlass', 'Spill-free Wine Glass', 'assets/wineGlass.jpg');

Image.prototype.renderImage = function() {
  var imageRendered = document.createElement('img');
  imageRendered.src = this.imageSrc;
  // imageRendered.setAttribute('src', imageSrc);
  imageRendered.id = this.imageID;
  document.getElementById('display-three-pictures-here').appendChild(imageRendered);
  this.timesShown++;
};

function genRandomImageNum() {
  return Math.floor(Math.random() * imageDataArray.length);
}

function genThreeRandomImgNums() {
  var randomImgNum1 = genRandomImageNum();
  var randomImgNum2 = genRandomImageNum();
  var randomImgNum3 = genRandomImageNum();
  while(randomImgNum1 === randomImgNum2) {
    randomImgNum2 = genRandomImageNum();
  }
  while(randomImgNum3 === randomImgNum1 || randomImgNum3 === randomImgNum2) {
    randomImgNum3 = genRandomImageNum();
  }
  // console.log('R1: ' + randomImgNum1);
  // console.log('R2: ' + randomImgNum2);
  // console.log('R3: ' + randomImgNum3);
  return [randomImgNum1, randomImgNum2, randomImgNum3];
};

function renderThreeRandomImages() {
  var threeRandomImgNums = genThreeRandomImgNums();
  for(var i = 0; i < threeRandomImgNums.length; i++) {
    var index = threeRandomImgNums[i];
    var object = imageDataArray[index];
    object.renderImage();
  }
}



//OLDER CODE BELOW
// function randomImgs() {
//   for (var i = 0; i < 3; i++) {
//     //generate random image for pic1
//     var pic1 = Math.floor(Math.random() * imageDataArray.length);
//     //Change the pic1 to oneEl HTML element
//     oneEl.textContent = imageDataArray[pic1];
//     //generate random image for index2
//     var pic2 = Math.floor(Math.random() * imageDataArray.length);
//     //If pic1 != pic2, change pic2 to twoEl HTML element
//     //test vs pic1; re--roll if the same
//     if(pic1 != pic2) {
//       twoEl.textContent = imageDataArray[pic2];
//     }
//     //While pic1 === pic2, go random!
//     while(pic1 === pic2){
//       var pic2 = Math.floor(Math.random() * imageDataArray.length);
//     //do same other test
//     }
//     var pic3 = Math.floor(Math.random() * imageDataArray.length);
//     //If pic3 != pic2 and != pic1, Change the pic3 to threeEl HTML element
//     if(pic3 != pic2 && pic3 != pic1) {
//       threeEl.textContent = imageDataArray[pic3];
//     }
//     //While pic3 === pic2 or pic1, go random!
//     while(pic3 === pic2 || pic3 === pic1) {
//       pic3 = Math.floor(Math.random() * imageDataArray.length);
//     }
//   }
// }
//
//
//
//
//
//
//
//
// // var bag = document.createElement('img');
// // bag.setAttribute('src', 'assets/' + images[0])
//
// //document.body.appendChild(bag)
//
// var oneEl= document.getElementById('one');
// var twoEl= document.getElementById('two');
// var threeEl= document.getElementById('three');
// var stuffPlaceHolder = [];
// var imagesSeen = [];
// var stuffPushed = [];
// var imagesSeenMulti = [];
// var timesRan = [];
// var imgEls = [];
//
// function randomImgs() {
//   for (var i = 0; i < 3; i++) {
//     //generate random image for pic1
//     var pic1 = Math.floor(Math.random() * imageDataArray.length);
//     //Change the pic1 to oneEl HTML element
//     oneEl.textContent = imageDataArray[pic1];
//     //generate random image for index2
//     var pic2 = Math.floor(Math.random() * imageDataArray.length);
//     //If pic1 != pic2, change pic2 to twoEl HTML element
//     //test vs pic1; re--roll if the same
//     if(pic1 != pic2) {
//       twoEl.textContent = imageDataArray[pic2];
//     }
//     //While pic1 === pic2, go random!
//     while(pic1 === pic2){
//       var pic2 = Math.floor(Math.random() * imageDataArray.length);
//     //do same other test
//     }
//     var pic3 = Math.floor(Math.random() * imageDataArray.length);
//     //If pic3 != pic2 and != pic1, Change the pic3 to threeEl HTML element
//     if(pic3 != pic2 && pic3 != pic1) {
//       threeEl.textContent = imageDataArray[pic3];
//     }
//     //While pic3 === pic2 or pic1, go random!
//     while(pic3 === pic2 || pic3 === pic1) {
//       pic3 = Math.floor(Math.random() * imageDataArray.length);
//     }
//   }
//   // Keep track of imagesSeen by pushing this rounds/forloops stuff and log the all of the stuff seen to the console
//   imagesSeen.push(imageDataArray[pic1],imageDataArray[pic2],imageDataArray[pic3]);
//   console.log('Running:  randomImgs  Showing all contents of imagesSeen: ' + '[ ' + imagesSeen + ' ]');
// };
// // randomImgs(imageDataArray);
//
//
// ///working
// //begin dunkins example
// // var bag = document.createElement('img');
// // bag.setAttribute('src', 'assets/' + images[0])
// //end dunkins example
//
// //Event listener notes. Page number 254-256
//
// //
// function renderImage(imgSrc) {
//   var imageRendered = document.createElement('img');
//   imageRendered.src = imgSrc;
//   // imageRendered.setAttribute('src', imgSrc);
//   document.body.appendChild(imageRendered);
//   // console.log(imageRendered);
// }
// //
// function genImgEls(imageDataArray){
//   for (var i=0; i < imageDataArray.length; i++) {
//     var imageShortName = document.createElement('img');
//     imageShortName.setAttribute('src', 'assets/' + imageDataArray[i]);
//     imgEls.push(imageShortName);
//   }
//   console.log('Running:  genImgEls  Showing all contents of imgEls: ' + '[ ' + imagesSeen + ' ]');
// };
//
// // genImgEls(imageDataArray);
