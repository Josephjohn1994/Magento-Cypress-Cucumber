Feature: User Sign-Up

Background: 
    Given I am on the "Create an Account" page
  
  Scenario: User successfully signs up with valid details
    When I fill in the sign-up form with valid details 
    And I submit the form
    Then I should see a welcome message indicating successful account creation

    
    Scenario: User tries to sign up with an already registered email
    When I fill in the sign-up form with an already registered email
    And I submit the form
    Then I should see an error message that the email is already in use


    Scenario: User leaves mandatory fields empty
    When I submit the form with missing mandatory fields
    Then I should see an error message indicating the missing fields

    Scenario: User enters an invalid email address
    When I fill in the sign-up form with an invalid email address
    And I submit the form
    Then I should see an error message indicating the email is invalid

    Scenario: When User enters an incorrect password in confirm password field
    When I fill in the confirm password field with an invalid password
    And I submit the form
    Then I should see an error message indicating password is not matching

    Scenario: When User enters an weak  password in password field 
    When I fill in the  password field with a weak password
    And I submit the form
    Then I should see an error message indicating password strength is weak
