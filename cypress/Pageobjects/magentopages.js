export class SignUpPage {
    
  weblocators={

   createaccount:"header[class='page-header'] li:nth-child(3) a:nth-child(1)",
   firstnamee:"#firstname",
   lastnamee:"#lastname",
   emailadress:"#email_address",
   passwordd:"#password",
   passworddconfirm:"#password-confirmation",
   submitbuttonn:"#form-validate > div > div.primary > button > span",
   accountcreationmessagee:"body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span"
}
  
  
  visit() {
      cy.visit(Cypress.env('URL'));
      cy.get(this.weblocators.createaccount).click();
    }
  
    fillSignUpForm(firstName, lastName, email, password) {
        cy.get(this.weblocators.firstnamee).type(firstName);
        cy.get(this.weblocators.lastnamee).type(lastName);
        cy.get(this.weblocators.emailadress).type(email);
        cy.get(this.weblocators.passwordd).type(password);
        cy.get(this.weblocators.passworddconfirm).type(password);
      }

      incorectpassword(firstName, lastName, email, password,incorrectpassword) {
        cy.get(this.weblocators.firstnamee).type(firstName);
        cy.get(this.weblocators.lastnamee).type(lastName);
        cy.get(this.weblocators.emailadress).type(email);
        cy.get(this.weblocators.passwordd).type(password);
        cy.get(this.weblocators.passworddconfirm).type(incorrectpassword);
      }
  
    submitForm() {
      cy.get(this.weblocators.submitbuttonn).click();
    }
  
    verifyAccountCreation() {
      cy.get(this.weblocators.accountcreationmessagee).should('contain','Welcome');
    }

    verifyErrorMessage(message) {
      cy.contains(message).should('be.visible');
    }
  
    
  }
  