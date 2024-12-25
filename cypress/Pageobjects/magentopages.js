export class SignUpPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/');
      cy.get("header[class='page-header'] li:nth-child(3) a:nth-child(1)").click();
    }
  
    fillSignUpForm(firstName, lastName, email, password) {
        cy.get('#firstname').type(firstName);
        cy.get('#lastname').type(lastName);
        cy.get('#email_address').type(email);
        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(password);
      }

      incorectpassword(firstName, lastName, email, password,incorrectpassword) {
        cy.get('#firstname').type(firstName);
        cy.get('#lastname').type(lastName);
        cy.get('#email_address').type(email);
        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(incorrectpassword);
      }
  
    submitForm() {
      cy.get('#form-validate > div > div.primary > button > span').click();
    }
  
    verifyAccountCreation() {
      cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span").should('contain','Welcome');
    }

    verifyErrorMessage(message) {
      cy.contains(message).should('be.visible');
    }
  
    
  }
  