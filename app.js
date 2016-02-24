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
var sweep = new Image('sweep', 'Baby Sweep', 'assets/sweep.png');
var tauntaun = new Image('tauntaun', 'Tauntaun', 'assets/tauntaun.jpg');
var unicorn = new Image('unicorn', 'Unicorn Meat', 'assets/unicorn.jpg');
var usb = new Image('usb', 'Tentacle USB', 'assets/usb.gif');
var waterCan = new Image('waterCan', 'Water Can', 'assets/waterCan.jpg');
var wineGlass = new Image('wineGlass', 'Spill-free Wine Glass', 'assets/wineGlass.jpg');

Image.prototype.renderImage = function() {
  var imageRendered = document.createElement('img');
  imageRendered.src = this.imageSrc;
  // imageRendered.setAttribute('src', imageSrc);
  imageRendered.id = this.imageID;
  document.getElementById('display-three-pictures-here').appendChild(imageRendered);
  console.log('Displaying ImageID: ' + imageRendered.id);
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
renderThreeRandomImages();
imgageEventListener();

function logClickedImages() {
  // console.log('Logging that a click has happened while testing...first thing to do when testing');
  var clickedId = this.id;
  for(var i = 0; i < imageDataArray.length; i++) {
    if(clickedId === imageDataArray[i].imageID) {
      imageDataArray[i].timesClicked++;
      console.log('\'' + imageDataArray[i].imageDescription + '\'' + ' has been clicked ' + imageDataArray[i].timesClicked + ' times.');
    }
  }
  renderNewThreeRandomImages();

}

function imgageEventListener() {
  var displayedImages = document.getElementsByTagName('img');
  for(var i = 0; i < displayedImages.length; i++) {
    displayedImages[i].addEventListener('click', logClickedImages);
  }
}

function renderNewThreeRandomImages() {
  var imageDisplaySection = document.getElementById('display-three-pictures-here');
  imageDisplaySection.textContent='';
  renderThreeRandomImages();
  imgageEventListener();
}
