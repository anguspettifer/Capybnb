describe('Viewing a listing', function() {
  it('checks for "send us a message content"', function() {
     cy.visit('https://sleepy-island-26774.herokuapp.com/')
     cy.contains('Room with Pool!')
     })
     it('clicks on the contact email link', function() {
       cy.contains('mrcapybara@gmail.com').click()
     })

});
