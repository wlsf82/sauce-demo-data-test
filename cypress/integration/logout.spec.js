describe('SWAG Labs - Logout scenarios', () => {
  beforeEach(() => cy.programmaticLogin())

  it('logs out via GUI', () => {
    cy.logout()
    cy.validateUserLoggedOut()
  })

  it('logs out via clearing the cookies', () => {
    cy.clearCookies()
    cy.reload()
    cy.checkErrorMsg("You can only access '/inventory.html' when you are logged in.")
    cy.validateUserLoggedOut()
  })
})

Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn')
    .click()
  cy.contains('a', 'Logout')
    .click()
})

Cypress.Commands.add('validateUserLoggedOut', () => {
  cy.url()
    .should('be.equal', `${Cypress.config('baseUrl')}/`)
  cy.dataTest('login-button')
    .should('be.visible')
})
