describe('SWAG Labs', () => {
  beforeEach(() => cy.visit('/'))

  it('logs in with standard user', () => {
    cy.get('[data-test="username"]')
      .type(Cypress.env('user'))
    cy.get('[data-test="password"]')
      .type(Cypress.env('password'), { log: false })
    cy.get('[data-test="login-button"]')
      .click()

    cy.url()
      .should('be.equal', `${Cypress.config('baseUrl')}/inventory.html`)
    cy.contains('.title', 'Products')
      .should('be.visible')
  })
})
