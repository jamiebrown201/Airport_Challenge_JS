var Airport = function() {
  this.landedPlanes = [];
};

Airport.prototype.landPlane = function(plane) {
  plane.land();
  this.landedPlanes.push(plane);
};

Airport.prototype.instructTakeOff = function(plane) {
  plane.takeOff();
  var index = this.landedPlanes.indexOf(plane);
  this.landedPlanes.splice(index);
};
