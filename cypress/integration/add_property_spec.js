describe('Add a property', function() {
  it('property owner can add a title', function(){
     cy.visit('http://127.0.0.1:8080/')
     var title = 'Warren for two'
     var description = 'In the meadow with a swimming pool.'
     cy.get('#title').type(title)
     cy.get('#description').type(description)
     cy.get('#add-property').submit()
     cy.contains(title)
     cy.contains(description)
  })
});



// describe('Viewing a listing', function() {
//
//   it('checks for "room with a pool content"', function() {
//      cy.visit('http://127.0.0.1:8080/')
//      cy.contains('Room with Pool!')
//      })
//
//   it('checks for "description content"', function() {
//     cy.visit('http://127.0.0.1:8080/')
//     cy.contains('Room Description: Awesome poolside room with plenty of sun. Space for 2 capybaras. Lots of great night life and black our shades so you can sleep peacefully during the day. Grass, fruits and soft tree bark available for breakfast.')
//   })
//
//
//   it('clicks on the contact email link', function() {
//       cy.contains('mrcapybara@gmail.com').click()
//      })
//
//
// });



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
