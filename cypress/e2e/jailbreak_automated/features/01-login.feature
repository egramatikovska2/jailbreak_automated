Feature: Jailbreak - Authentication
  
  Scenario: Successful login - correct email and password
     When I open the Jailbreak app
     Then I should be redirected on the login page for Jailbreak
     Then I should enter the correct email for User B
     Then I should enter the correct password for User B
     When I click on the LOGIN button
     Then I should be redirected on the map with available transportation lanes

  Scenario: Unsuccessful login - incorrect email
     When I open the Jailbreak app
     Then I should be redirected on the login page for Jailbreak
     Then I should enter an incorrect email for User B
     Then I should enter the correct password for User B
     When I click on the LOGIN button
     Then there should be an error message for incorrect email or password
   
 Scenario: Unsuccessful login - incorrect password
     When I open the Jailbreak app
     Then I should be redirected on the login page for Jailbreak
     Then I should enter the correct email for User B
     Then I should enter an incorrect password for User B
     When I click on the LOGIN button
     Then there should be an error message for incorrect email or password
     
 