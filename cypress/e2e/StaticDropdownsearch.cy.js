describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm;jsessionid=6D6EFE9FF1A2C66F41557E102B16C93C')
      cy.get("input[name='username']").type("SeharK")

      cy.get("input[name='password']").type("1234567")

      cy.get("input[value='Log In']").click()
   
      cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()

      cy.get('#month').select("May")

      cy.get('#transactionType').select("Debit")

      cy.get("input[value='Go']").click()
   
    })




  })