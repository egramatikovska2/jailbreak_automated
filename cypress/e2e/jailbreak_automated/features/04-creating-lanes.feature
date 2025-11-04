Feature: Creating lanes

Scenario: Creating a direct lane by create connection button
    When I open the Jailbreak app
    When I should be redirected on the login page for Jailbreak
    Then I should log in with User B
    Then I should be redirected on the map with available transportation lanes
    Then I should click on EDIT NETWORK button
    Then I should be redirected on the edit network mode
    When I click on the CREATE CONNECTION button
    Then the side dialog for creating a connection should be displayed
    Then I should choose the origin place
    Then I should choose the destination place
    When I click on the CREATE CONNECTION button on the dialog
    Then the side dialog for entering lane details should be opened
    Then I should enter the lane details
    When I click on SUBMIT button on the side dialog
    Then the temporary lane should be displayed in the network layers
    Then I should save the changes
  
    
  
