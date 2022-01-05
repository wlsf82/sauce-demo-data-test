describe('SWAG Labs', () => {
  beforeEach(() => cy.visit('/'))

  it('logs in with standard user', () => {
    cy.login()

    cy.url()
      .should('be.equal', `${Cypress.config('baseUrl')}/inventory.html`)
    cy.contains('.title', 'Products')
      .should('be.visible')
  })
})
