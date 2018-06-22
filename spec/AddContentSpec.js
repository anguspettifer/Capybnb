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

  it('can add the start date specified by the letter', function() {
    addContent.addStartDate("2018-08-03");
    expect(addContent.getStartDate()).toContain("2018-08-03");
  });


  it('can add the end date specified by the letter', function() {
    addContent.addEndDate("2018-07-03");
    expect(addContent.getEndDate()).toContain("2018-08-03");
  });

});
