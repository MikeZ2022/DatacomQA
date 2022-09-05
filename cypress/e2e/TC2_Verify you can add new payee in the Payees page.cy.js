///<reference types="cypress"/>
describe('DataCom QA assessment', () => {
  beforeEach(()=>{
    cy.viewport('macbook-15')
    cy.forceVisit('/client')
  })
  it('TC2: Verify you can add new payee in the Payees page', () => {
    cy.get('.topbar-actions >.MenuButton').click()
    cy.get('.MainMenu-navList >.js-main-menu-payees').click()
    cy.get('.js-add-payee').eq(0).click()
    cy.get('input[name="apm-name"]').type('Mike{enter}')
    cy.get('.account-row >.align-right').type('1234567890123000')
    cy.get('.controls >.js-submit').click()
    cy.contains('Mike').should('be.exist')
    cy.clearCookies()
    cy.getCookies().should('be.empty')
  })
})