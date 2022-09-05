///<reference types="cypress"/>
describe('DataCom QA assessment', () => {
    beforeEach(()=>{
      cy.viewport('macbook-15')
      cy.forceVisit('/client')
    })
    it('TC3: Verify payee name is a required field', () => {
      cy.get('.topbar-actions >.MenuButton').click()
      cy.get('.MainMenu-navList >.js-main-menu-payees').click()
      cy.get('.js-add-payee').eq(0).click()
      cy.get('.controls >.js-submit').click()
      cy.contains('A problem was found. Please correct the field highlighted below.').should('be.exist')
      cy.get('input[name="apm-name"]').type('Mike{enter}')
      cy.contains('A problem was found. Please correct the field highlighted below.').should('not.exist')
      cy.clearCookies()
      cy.getCookies().should('be.empty')
    })
  })