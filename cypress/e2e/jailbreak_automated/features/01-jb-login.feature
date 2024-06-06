Feature: JailBreak - Authentication
  
  Scenario: Jailbreak - Successful login - correct email and password
     When I open the Jailbreak app
     Then I should be redirected on Jailbreak web
     Then I should assert the role choosing page
     Then I should choose the role Buyer
     Then I should be redirected on the login page for Jailbreak
     Then I enter the correct email for Jailbreak
     Then I enter the correct password for Jailbreak
     Then I click on the login button for Jailbreak
     Then I should be redirected on the list with available transportation lanes

  Scenario: Jailbreak - unsuccessful login - incorrect email
     When I open the Jailbreak app
     Then I should be redirected on Jailbreak web
     Then I should assert the role choosing page
     Then I should choose the role Buyer
     Then I should be redirected on the login page for Jailbreak
     Then I enter the incorrect email for Jailbreak
     Then I enter the correct password for Jailbreak
     Then I click on the login button for Jailbreak
     Then there should be an error message for incorrect email or password
     Then I should be not be redirected on the list with available transportation lanes
  
   Scenario: Jailbreak - unsuccessful login - incorrect password
     When I open the Jailbreak app
     Then I should be redirected on Jailbreak web
     Then I should assert the role choosing page
     Then I should choose the role Buyer
     Then I should be redirected on the login page for Jailbreak
     Then I enter the correct email for Jailbreak
     Then I enter the incorrect password for Jailbreak
     Then I click on the login button for Jailbreak
     Then there should be an error message for incorrect email or password
     Then I should be not be redirected on the list with available transportation lanes


  