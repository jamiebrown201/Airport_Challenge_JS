describe("airport",function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe("airport instructs to land", function() {

    it("lands a plane", function() {
      var plane = {
        land: function() {}
      };
      spyOn(plane, 'land');
      airport.landPlane(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it("is stored in the airport", function() {
      var plane = {
        land: function() {}
      };
      spyOn(plane, 'land');
      airport.landPlane(plane);
      expect(airport.landedPlanes).toContain(plane);
    });
  });

  describe("airport instructs plane to take off", function() {
    it("makes a plane take off", function() {
      var plane = {
        takeOff: function() {}
      };
      spyOn(plane, 'takeOff');
      airport.instructTakeOff(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });

    it("is no longer in the airport", function() {
      var plane = {
        takeOff: function() {}
      };
      spyOn(plane, 'takeOff');
      airport.instructTakeOff(plane);
      expect(airport.landedPlanes).not.toContain(plane);
    });
  });
});
