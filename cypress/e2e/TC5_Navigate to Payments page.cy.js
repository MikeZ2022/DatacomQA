///<reference types="cypress"/>
describe('DataCom QA assessment', () => {
    beforeEach(()=>{
      cy.viewport('macbook-15')
      cy.forceVisit('/client')
    })
    it('TC5: Navigate to Payments page', () => {
      cy.get('.topbar-actions >.MenuButton').click()
      cy.get('.MainMenu-navList >.js-main-menu-paytransfer').click()
      cy.get('button[data-monitoring-label="Transfer Form From Chooser"]').click()
      cy.get('img[alt="Everyday"]').click()
      cy.get('button[data-monitoring-label="Transfer Form To Chooser"]').click()
      cy.contains('Accounts').click()
      cy.get('img[alt="Bills "]').click()
      cy.get('input[name="amount"]').type('500{enter}')
      cy.on('window:alert',(text)=>{
        expect(text).to.contains('Transfer successful')
      })
      cy.contains('2,000.00').should('be.exist')
      cy.contains('920.00').should('be.exist')
      cy.clearCookies()
      cy.getCookies().should('be.empty')
    })
  })