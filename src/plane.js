var Plane = function() {
  this.isInAirport = false;
};

Plane.prototype.land = function() {
  this.isInAirport = true;
};

Plane.prototype.takeOff = function() {
  this.isInAirport = false;
};
