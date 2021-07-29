describe('initial integration test', () => {
  it('works', () => {
    cy.visit(`http://localhost:${process.env.PORT || 3000}/`)
      .get('h2')
      .should('contain.text', 'Home.tsx')
  })
})
