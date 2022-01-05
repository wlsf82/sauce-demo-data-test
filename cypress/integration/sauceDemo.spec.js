describe('SWAG Labs', () => {
  beforeEach(() => cy.visit('/'))

  it('logs in with standard user', () => {
    cy.login()

    cy.validateSucessfullLogin()
  })

  it('error on locked user', () => {
    cy.login('locked_out_user', Cypress.env('password'))

    cy.dataTest('error')
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.')
  })

  it('logs in with performance glitch user', () => {
    cy.login('performance_glitch_user', Cypress.env('password'))

    cy.validateSucessfullLogin()
  })
})

Cypress.Commands.add('validateSucessfullLogin', () => {
  cy.url()
    .should('be.equal', `${Cypress.config('baseUrl')}/inventory.html`)
  cy.contains('.title', 'Products')
    .should('be.visible')
})
