var Airport = function(Weather) {
  this.landedPlanes = [];
  this._weather = Weather;
  this._CAPACITY = 5;
};

Airport.prototype.landPlane = function(plane) {
  if (this.landedPlanes.length ===  this._CAPACITY) {
    throw new Error("No planes can land as airport is full");
  }
  if (this._weather.isStormy) {
    throw new Error("No planes can land as it is stormy");
  }
  plane.land();
  this.landedPlanes.push(plane);
};

Airport.prototype.instructTakeOff = function(plane) {
  if (this._weather.isStormy) {
    throw new Error("No planes can take off as it is stormy");
  }
  plane.takeOff();
  var index = this.landedPlanes.indexOf(plane);
  this.landedPlanes.splice(index);
};
