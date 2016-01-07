describe('User Stories', function() {
  var plane;
  var airport;
  var weather;

  describe('under normal conditions', function() {
    beforeEach(function() {
      weather = new Weather();
      airport = new Airport(weather);
      plane = new Plane();
      spyOn(Math, 'random').and.returnValue(0);
    });

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to land at an airport and confirm that it has landed
    it('plane is instructed to land', function() {
      airport.landPlane(plane);
      expect(airport.landedPlanes).toContain(plane);
    });

    it('plane is in the airport after being instructed to land', function() {
      airport.landPlane(plane);
      expect(plane.isInAirport).toBe(true);
    });

  // As an air traffic controller
  // So I can get passengers on the way to their destination
  // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
    it('plane is instructed to take off', function() {
      airport.landPlane(plane);
      airport.instructTakeOff(plane);
      expect(airport.landedPlane).not.toContain(plane);
    });

    it('plane is no longer in the airport after being instructed to take off', function() {
      airport.instructTakeOff(plane);
      expect(plane.isInAirport).toBe(false);
    });


  // As an air traffic controller
  // To ensure safety
  // I want to prevent landing when the airport is full
    it('airport prevents landing when the airport is full', function() {
      airport.landPlane(plane);
      expect(function(){airport.landPlane(plane);}).toThrow(new Error("No planes can land as airport is full"));
    });
  });

  describe('under stormy conditions', function() {
    beforeEach(function() {
      weather = new Weather();
      airport = new Airport(weather);
      plane = new Plane();
      spyOn(Math, 'random').and.returnValue(1);
    });
    // As an air traffic controller
    // To ensure safety
    // I want to prevent takeoff when weather is stormy
    it('airport prevents takeoff', function() {
      expect(function(){airport.instructTakeOff(plane);}).toThrow(new Error("No planes can take off as it is stormy"));
    });

    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when weather is stormy
    it('airport prevents the plane from landing', function() {
      for(i=0; i<5; i++) {
        airport.landPlane(plane);
      }
      expect(function(){airport.landPlane(plane);}).toThrow(new Error("No planes can land as it is stormy"));
    });
  });
});
