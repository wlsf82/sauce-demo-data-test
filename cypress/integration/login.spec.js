describe('SWAG Labs', () => {
  beforeEach(() => cy.visit('/'))

  it('logs in with standard user', () => {
    cy.login()

    cy.validateSucessfullLogin()
  })

  it('error on locked user', () => {
    cy.login('locked_out_user', Cypress.env('password'))

    cy.checkErrorMsg('Sorry, this user has been locked out.')
  })

  it('logs in with performance glitch user', () => {
    cy.login('performance_glitch_user', Cypress.env('password'))

    cy.validateSucessfullLogin()
  })

  it('error on invalid password', () => {
    cy.login(Cypress.env('user'), 'invalid')

    cy.checkErrorMsg('Username and password do not match')
  })

  it('logs out', () => {
    cy.login()

    cy.logout()

    cy.validateUserLoggedOut()
  })

  it('logs out via clearing the cookies', () => {
    cy.login()
    cy.clearCookies()
    cy.reload()
    cy.checkErrorMsg("You can only access '/inventory.html' when you are logged in.")
  })
})

Cypress.Commands.add('validateSucessfullLogin', () => {
  cy.url()
    .should('be.equal', `${Cypress.config('baseUrl')}/inventory.html`)
  cy.contains('.title', 'Products')
    .should('be.visible')
})

Cypress.Commands.add('checkErrorMsg', msg => {
  cy.dataTest('error')
    .should('be.visible')
    .and('contain', msg)
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
