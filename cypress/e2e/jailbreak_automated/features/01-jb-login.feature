Feature: Jailbreak - Authentication
  
  Scenario: Jailbreak BUYER - Successful login - correct email and password
     When I open the Jailbreak app
     Then I should be redirected on the login page for Jailbreak
     Then I enter the correct BUYER email for Jailbreak
     Then I enter the correct BUYER password for Jailbreak
     When I click on the login button for Jailbreak
     Then I should be redirected on the map with available transportation lanes

  Scenario: Jailbreak BUYER - Unsuccessful login - incorrect email
     When I open the Jailbreak app
     Then I should be redirected on the login page for Jailbreak
     Then I enter the incorrect BUYER email for Jailbreak
     Then I enter the correct BUYER password for Jailbreak
     When I click on the login button for Jailbreak
     Then there should be an error message for incorrect email or password
     Then I should not be redirected on the map with available transportation lanes
  
  Scenario: Jailbreak BUYER - Unsuccessful login - incorrect password
     When I open the Jailbreak app
     Then I should be redirected on the login page for Jailbreak
     Then I enter the correct BUYER email for Jailbreak
     Then I enter the incorrect BUYER password for Jailbreak
     When I click on the login button for Jailbreak
     Then there should be an error message for incorrect email or password
     Then I should not be redirected on the map with available transportation lanes
     
  Scenario: Jailbreak SUPPLIER - Successful login - correct email and password
     When I open the Jailbreak app
     Then I should be redirected on the login page for Jailbreak
     Then I enter the correct SUPPLIER email for Jailbreak
     Then I enter the correct SUPPLIER password for Jailbreak
     When I click on the login button for Jailbreak
     Then I should be redirected on the list with my transportation lanes

  Scenario: Jailbreak SUPPLIER - Unsuccessful login - incorrect email
     When I open the Jailbreak app
     Then I should be redirected on the login page for Jailbreak
     Then I enter the incorrect BUYER email for Jailbreak
     Then I enter the correct BUYER password for Jailbreak
     When I click on the login button for Jailbreak
     Then there should be an error message for incorrect email or password
     Then I should not be redirected on the list with my transportation lanes
  
   Scenario: Jailbreak SUPPLIER - Unsuccessful login - incorrect password
     When I open the Jailbreak app
     Then I should be redirected on the login page for Jailbreak
     Then I enter the correct BUYER email for Jailbreak
     Then I enter the incorrect BUYER password for Jailbreak
     When I click on the login button for Jailbreak
     Then there should be an error message for incorrect email or password
     Then I should not be redirected on the list with my transportation lanes
  


  