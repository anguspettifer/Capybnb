describe('Add a property', function() {
  it('property owner can add a title', function(){
     cy.visit('http://127.0.0.1:8080/')
     cy.get('#addtitle').type('Room with a tennis court!{enter}')
     cy.contains('Room with a tennis court!')
  })
});



// describe('Viewing a listing', function() {
//
//   it('checks for "room with a pool content"', function() {
//      cy.visit('http://127.0.0.1:8080/')
//      cy.contains('Room with Pool!')
//      })
//
//   it('clicks on the contact email link', function() {
//       cy.contains('mrcapybara@gmail.com').click()
//      })
//
//   it('contains an image', function() {
//
//   })
//
//
// });
