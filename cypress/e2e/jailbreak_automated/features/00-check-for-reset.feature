Feature: CHECK IF DEV SHOULD BE RESETTED

Scenario: Reset DEV if needed
     When I open the Jailbreak app
     Then I should be redirected on Jailbreak web
     Then I should assert the role choosing page
     Then I should choose the role Buyer
     Then I should be redirected on the login page for Jailbreak
     Then I enter the correct email for Jailbreak
     Then I enter the correct password for Jailbreak
     Then I click on the login button for Jailbreak
     Then I should be redirected on the list with available transportation lanes
     Then I should reset the system if all the transportation lanes are bought