'use strict';

describe('AddContent', function() {
  var addContent;

  beforeEach(function() {
    addContent = new AddContent();
  });

  it('can add a title for a property', function() {
    addContent.addTitle("Capybara Nest");
    expect(addContent.getTitle()).toContain("Capybara Nest");
  });

  it('can add a description of a property', function() {
    addContent.addDescription("Space for two");
    expect(addContent.getDescription()).toContain("Space for two");
  });

  it('can add am email for a property', function(){
    addContent.addEmail("email test");
    expect(addContent.getEmail()).toContain("email test");
  });

});
