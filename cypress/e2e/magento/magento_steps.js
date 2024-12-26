import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {SignUpPage} from "../../Pageobjects/magentopages";
const account = new SignUpPage()

//User successfully signs up with valid details
Given('I am on the "Create an Account" page', () => {
    account.visit()
  });
  When('I fill in the sign-up form with valid details', () => {
    account.fillSignUpForm('James', 'Doe', 'jamespr@example.com', 'Password123');
  });

  When('I submit the form', () => {
    account.submitForm();
  });
  
  
  
  Then('I should see a welcome message indicating successful account creation', () => {
       
    account.verifyAccountCreation();
  });

  //Logging in after successful sign-up
  Given('I am on the "Sign In" page', () => {
    account.visitsignin()
  });
  When('I log in with my credentials and click on sign in button', () => {
    account.fillsignin('jamespr@example.com','Password123')

  });

  Then('I should be successfully logged in and redirected to the homepage', () => {
       
    account.verifyAccountCreation();
  });


  //User tries to sign up with an already registered email
  When('I fill in the sign-up form with an already registered email', () => {
    account.fillSignUpForm('Jane', 'Smith', 'johndoe@example.com', 'Password123');
  });

  When('I submit the form', () => {
    account.submitForm();
  });

  Then('I should see an error message that the email is already in use', () => {
    account.verifyErrorMessage('There is already an account with this email address.');
  });

  //User leaves mandatory fields empty
  When('I submit the form with missing mandatory fields', () => {
    account.submitForm();
  });

  Then('I should see an error message indicating the missing fields', () => {
    account.verifyErrorMessage('This is a required field.');
  });

  //User enters an invalid email address
  When('I fill in the sign-up form with an invalid email address', () => {
    account.fillSignUpForm('Ram', 'Brown', 'alice-brown@invalid', 'Password123');
  });

  When('I submit the form', () => {
    account.submitForm();
  });

  Then('I should see an error message indicating the email is invalid', () => {
    account.verifyErrorMessage('Please enter a valid email address');
  });

  //When User enters a  incorrect password in confirm password field
  When('I fill in the confirm password field with an invalid password', () => {
    account.incorectpassword('Alice', 'Brown', 'alice-brown@gmail.com', 'Password123','passrd');
  });

  When('I submit the form', () => {
    account.submitForm();
  });

  Then('I should see an error message indicating password is not matching', () => {
    account.verifyErrorMessage('Please enter the same value again.');
  });

  //When User enters an weak  password in password field

  When('I fill in the  password field with a weak password', () => {
    account.incorectpassword('Alice', 'Brown', 'alice-brown@gmail.com', 'Passw','Passw');
  });

  When('I submit the form', () => {
    account.submitForm();
  });

  Then('I should see an error message indicating password strength is weak', () => {
    account.verifyErrorMessage('Password Strength: Weak');
  });

  
  
  
 
  
 