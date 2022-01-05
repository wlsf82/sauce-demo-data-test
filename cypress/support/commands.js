Cypress.Commands.add('dataTest', value => {
  return cy.get(`[data-test="${value}"]`)
})
