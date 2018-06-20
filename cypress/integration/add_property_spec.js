describe('Add a property', function() {
  it('property owner can add a title', function(){
     cy.visit('http://127.0.0.1:8080/')
     cy.get('#addtitle').type('Room with a tennis court!{enter}')
     cy.contains('Room with a tennis court!')
  })

  it('completes the email form', function() {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#email').type('example@example.com')
    cy.get('#submit').submit()
    cy.contains('example@example.com')
  })

  it('adds an image', function() {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#upload img')
    .should('have.attr', 'src')
  })

});
