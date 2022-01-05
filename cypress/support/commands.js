Cypress.Commands.add('dataTest', value => {
  return cy.get(`[data-test="${value}"]`)
})

Cypress.Commands.add('login', (
  user = Cypress.env('user'),
  password = Cypress.env('password')
) => {
  cy.dataTest('username')
    .type(user)
  cy.dataTest('password')
    .type(password, { log: false })
  cy.dataTest('login-button')
    .click()
})
