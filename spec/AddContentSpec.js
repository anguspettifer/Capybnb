'use strict';


describe('AddContent', function() {
  var addContent;

  beforeEach(function() {
    addContent = new AddContent();
  });

  it('can add a description of a property', function() {
    addContent.addDescription("Banging apartment!")

    expect(addContent.getDescription()).toContain("Banging apartment!");
  });

});
