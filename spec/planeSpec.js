describe("", function () {
  var plane;

  beforeEach(function() {
      plane = new Plane();
  });
  describe("lands", function () {
    it("can be landed", function(){
      plane.land();
      expect(plane.isInAirport).toBe(true);
    });
  });

  describe("take off", function() {
    it("can take off", function() {
      plane.takeOff();
      expect(plane.isInAirport).toBe(false);
    });
  });
});
