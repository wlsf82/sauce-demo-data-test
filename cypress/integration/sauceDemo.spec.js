describe('SWAG Labs', () => {
  beforeEach(() => cy.visit('/'))

  it('logs in with standard user', () => {
    cy.dataTest('username')
      .type(Cypress.env('user'))
    cy.dataTest('password')
      .type(Cypress.env('password'), { log: false })
    cy.dataTest('login-button')
      .click()

    cy.url()
      .should('be.equal', `${Cypress.config('baseUrl')}/inventory.html`)
    cy.contains('.title', 'Products')
      .should('be.visible')
  })
})
