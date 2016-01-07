describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe('weather conditions', function() {
    it('should report stormy weather', function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(weather.isStormy).toBe(true);
    });

    it('should report fine weather', function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(weather.isStormy).toBe(false);
    });
  });
});
