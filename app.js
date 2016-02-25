'use strict';

var imageDataArray = [];
var barChart = null;
var labelsArray;
var clicksArray;
var displayedArray;
var totalClicksCount = 0;
var totalClicksAllowed = 25;

function Image(imageID,imageDescription,imageSrc) {
  this.imageID = imageID;
  this.imageDescription = imageDescription;
  this.imageSrc = imageSrc;
  this.timesDisplayed = 0;
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
  this.timesDisplayed++;
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
  buildBarChart();
}

function imgageEventListener() {
  var displayedImages = document.getElementsByTagName('img');
  for(var i = 0; i < displayedImages.length; i++) {
    displayedImages[i].addEventListener('click', logClickedImages);
  }
}

// function countTwentyFiveClicksEventListener() {
//   var twentyFiveClicks = 0;
//   for(var i = 0; i < twentyFiveClicks.length; i++) {
//     twentyFiveClicks[i].addEventListener('click', logClickedImages);
//   }
// }

function renderNewThreeRandomImages() {
  if(totalClicksCount < totalClicksAllowed) {
    var imageDisplaySection = document.getElementById('display-three-pictures-here');
    imageDisplaySection.textContent='';
    renderThreeRandomImages();
    imgageEventListener();
    totalClicksCount++;
  } else {
    alert('Game Over');
    displayPlayAgain();
  }
}

function genChartData() {
  clicksArray = [];
  displayedArray = [];
  for(var i = 0; i < imageDataArray.length; i++) {
    clicksArray.push(imageDataArray[i].timesClicked);
    displayedArray.push(imageDataArray[i].timesDisplayed);
  }
};

function genChartLabels() {
  labelsArray = [];
  for(var i = 0; i < imageDataArray.length; i++) {
    labelsArray.push(imageDataArray[i].imageDescription);
  }
}

function destroyExistingChart() {
  if(barChart != null) {
    barChart.destroy();
  }
}

function buildBarChart() {
  destroyExistingChart();
  genChartLabels();
  genChartData();
  //attempting charting with chart-js.js
  var barData = {
    labels : labelsArray,
    datasets : [
      {
        fillColor : '#48A497',
        strokeColor : '#48A4D1',
        data : clicksArray
      },
      {
        fillColor : 'rgba(73,188,170,0.4)',
        strokeColor : 'rgba(72,174,209,0.4)',
        data : displayedArray
      }
    ]
  };
// get bar chart canvas
  var clickedAndDisplayedChart = document.getElementById('display-chart-one-here').getContext('2d');
  barChart = new Chart(clickedAndDisplayedChart).Bar(barData);
}


// var clearLS = document.getElementById('clearLS');
// clearLS.addEventListener function() {
//   localstorage.clear();
// }

function beginNewGame() {
  clearImages();
  clicksArray = [];
  displayedArray = [];
  clicksArray = [];
  displayedArray = [];
  labelsArray = [];
  renderThreeRandomImages();
  imgageEventListener();
  genChartLabels();
  genChartData();
  buildBarChart();

}

function clearImages() {
  var images = document.getElementsByTagName('img');
  var numOfImagesPresent = images.length;
  for (var i= document.images.length; i-->0;) {
    document.images[i].parentNode.removeChild(document.images[i]);
  }
}

function displayPlayAgain() {
  clearImages();
  var gameOverImage = document.createElement('img');
  gameOverImage.src = 'assets/gameOver.jpeg';
  gameOverImage.id = 'display-gameOverImage-here';
  var playAgainImage = document.createElement('img');
  playAgainImage.src = 'assets/playAgainTwo.jpeg';
  playAgainImage.id = 'display-playAgainImage-here';
  playAgainImage.addEventListener('click', beginNewGame);

  document.getElementById('display-three-pictures-here').appendChild(gameOverImage);
  document.getElementById('display-three-pictures-here').appendChild(playAgainImage);
}
