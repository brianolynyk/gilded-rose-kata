describe("Gilded Rose", function() {

  /**
   * STEP 1: Fix any broken tests and add any that will help
   * confirm existing functionality works as expected.
   */
  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });

  it("should degrade quality twice as fast after sell by date", function () {
    items = [ new Item("foo", -1, 10)];
    update_quality();
    expect(items[0].quality).toEqual(8);
  });

  /**
   * STEP 3: Write tests for new behaviour.
   */
  it("should degrade conjured items twice as fast", function() {
    items = [ new Item("Conjured Wand of Conjuring", 10, 50),
              new Item("Conjured Wand of Conjuring", 0, 50)];
    update_quality();
    expect(items[0].quality).toEqual(48);
    expect(items[1].quality).toEqual(46);

  });

});
