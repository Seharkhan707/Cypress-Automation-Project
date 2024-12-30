describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm;jsessionid=6D6EFE9FF1A2C66F41557E102B16C93C')
      cy.get('#loginPanel > :nth-child(3) > a').click()
      cy.get("input[id='customer.firstName']").type('Sehar')
      cy.get("input[id='customer.lastName']").type('Khan')
      cy.get("input[id='customer.address.street']").type("ABC")
      cy.get("input[id='customer.address.city']").type("XYZ")
      cy.get("input[id='customer.address.state']").type("123")
      cy.get("input[id='customer.address.zipCode']").type("1234")
      cy.get("input[id='customer.phoneNumber']").type("12345678")
      cy.get("input[id='customer.ssn']").type("234")
      cy.get("input[id='customer.username']").type("Sehar")
      cy.get("input[id='customer.password']").type("123456")
      cy.get("#repeatedPassword").type("123456")
      cy.get("input[value='Register']").click()


    
    
    
    })

   
    
  })