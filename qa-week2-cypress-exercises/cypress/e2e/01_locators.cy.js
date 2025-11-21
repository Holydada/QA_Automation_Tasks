
// Exercise 1: Locating Elements with Different Selectors
describe('Exercise 1  Locators: id, class, attribute', () => {
  it('locates and interacts with elements using multiple selector types', () => {
      cy.visit('https://rahulshettyacademy.com/angularpractice/')

       cy.get("#exampleInputPassword1").clear().type("dawit321@#$");

       cy.get(":nth-child(1) > .form-control").clear().type("Dawit Abera");
      
        cy.get("input[name='email']").clear().type("dawitabera@gmail.com");
  
    

          cy.get(".btn.btn-success").should("be.visible").click();
    

    // Assert success banner appears (common for this demo form)
    cy.get('.alert-success', { timeout: 10000 }).should('be.visible')
  })
})
