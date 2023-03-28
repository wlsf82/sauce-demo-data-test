describe('SWAG Labs - Login scenarios', () => {
  beforeEach(() => cy.visit('/'))

  it('logs in with standard user', () => {
    cy.login()

    cy.validateSucessfullLogin()
  })

  it('error on locked user', () => {
    cy.login('locked_out_user', Cypress.env('PASSWORD'))

    cy.checkErrorMsg('Sorry, this user has been locked out.')
  })

  it('logs in with performance glitch user', () => {
    cy.login('performance_glitch_user', Cypress.env('PASSWORD'))

    cy.validateSucessfullLogin()
  })

  it('error on invalid password', () => {
    cy.login(Cypress.env('USER'), 'invalid')

    cy.checkErrorMsg('Username and password do not match')
  })
})

Cypress.Commands.add('validateSucessfullLogin', () => {
  cy.url()
    .should('be.equal', `${Cypress.config('baseUrl')}/inventory.html`)
  cy.contains('.title', 'Products')
    .should('be.visible')
})
