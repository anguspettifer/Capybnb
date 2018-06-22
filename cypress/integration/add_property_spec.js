describe('Add a property', function() {

  it('adds title, description, dates & email', function() {
    cy.visit('http://localhost:3000/')
    var title = 'Warren for two'
    var description = 'In the meadow with a swimming pool.'
     var email = 'example@email.com'
     var startdate = '2018-07-22'
     var enddate = '2018-07-24'
     cy.get('#title').type(title)
     cy.get('#description').type(description)
     cy.get('#email').type(email)
     cy.get('#start').type(startdate)
     cy.get('#end').type(enddate)
     cy.get('#add-property').submit()
     cy.contains(title)
     cy.contains(description)
     cy.contains(email)
     cy.contains(startdate)
     cy.contains(enddate)
  });
});
