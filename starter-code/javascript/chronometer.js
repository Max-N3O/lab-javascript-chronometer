// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.minutes = "00";
  this.seconds = "00";
  this.hundredthseconds = "00";
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(()=>{
    this.currentTime += 1 ;
    this.setTime();
    printMinutes();
    printSeconds();
    printHundredthSeconds();
  },1)
};

Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime/6000);
  
};

Chronometer.prototype.setSeconds = function () {
  return parseInt(((this.currentTime - (parseInt(this.currentTime/6000))*6000)/100));
};

Chronometer.prototype.setHundredthSeconds = function() {
  return this.currentTime % 100;
}

Chronometer.prototype.twoDigitsNumber = function (value) {
  if (value === 0) {
    return "00";
  } else if (value < 10) {
    return "0" + value;
  } else {
    return ""+ value;
  }
  
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
  this.hundredthSeconds = this.twoDigitsNumber(this.setHundredthSeconds());

};



Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);  
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.minutes = "00";
  this.seconds = "00";
  this.hundredthSeconds = "00";
  printMinutes();
  printSeconds();
  printHundredthSeconds();
  clearSplits();
};

Chronometer.prototype.splitClick = function () {
  printSplit();
};
