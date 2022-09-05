///<reference types="cypress"/>
describe('DataCom QA assessment', () => {
    beforeEach(()=>{
      cy.viewport('macbook-15')
      cy.forceVisit('/client')
    })
    it('TC1: Verify you can navigate to Payees page using the navigation menu', () => {
      cy.get('.topbar-actions >.MenuButton').click()
      cy.get('.MainMenu-navList >.js-main-menu-payees').click()
      cy.get('.js-add-payee').eq(0).click()
      cy.contains('Payees').should('be.exist')
      cy.url().should('include', 'client/payees')
    })
  })