describe("airport",function() {
  var airport;

  describe("when weather conditions are fine", function() {
    beforeEach(function() {
      weather = {isStormy: 0};
      airport = new Airport(weather);
    });

    it("lands a plane", function() {
      var plane = {
        land: function() {}
      };
      spyOn(plane, 'land');
      airport.landPlane(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it("landed plane is stored in the airport", function() {
      var plane = {
        land: function() {}
      };
      spyOn(plane, 'land');
      airport.landPlane(plane);
      expect(airport.landedPlanes).toContain(plane);
    });

    it("the plane takes off", function() {
      var plane = {
        takeOff: function() {}
      };
      spyOn(plane, 'takeOff');
      airport.instructTakeOff(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });

    it("plane is no longer in the airport", function() {
      var plane = {
        takeOff: function() {}
      };
      spyOn(plane, 'takeOff');
      airport.instructTakeOff(plane);
      expect(airport.landedPlanes).not.toContain(plane);
    });

    it('prevents plane from landing if airport is full', function() {
      var plane = {
        land: function() {}
      };
      spyOn(plane, 'land');
      for(i=0; i<5; i++) {
        airport.landPlane(plane);
      }
      expect(function(){airport.landPlane(plane);}).toThrow(new Error("No planes can land as airport is full"));
    });
  });

  describe("when weather conditions are stormy", function() {
    beforeEach(function() {
      weather = {isStormy: 1};
      airport = new Airport(weather);
    });

    it("plane cannot take off if weather is stormy", function() {
      var plane = {
        takeOff: function() {}
      };
      spyOn(plane, 'takeOff');
      expect(function(){airport.instructTakeOff(plane);}).toThrow(new Error("No planes can take off as it is stormy"));
    });

    it("plane cannot land if weather is stormy", function() {
      var plane = {
        land: function() {}
      };
      spyOn(plane, 'land');
      expect(function(){airport.landPlane(plane);}).toThrow(new Error("No planes can land as it is stormy"));
    });
  });
});
