describe('Aukro', () => {
  it('Aukro', () => {
    cy.visit('https://www.google.cz/?hl=cs')
    cy.get('#W0wltc > .QS5gu').click()  
    cy.get('.gLFyf').type("Aukro{enter}")
    cy.get('[href="https://aukro.cz/"] > .LC20lb').click()

  })
})