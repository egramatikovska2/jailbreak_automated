Feature: Creating places

Scenario: Creating a place by add place button
    When I open the Jailbreak app
    When I should be redirected on the login page for Jailbreak
    Then I should log in with User B
    Then I should be redirected on the map with available transportation lanes
    Then I should click on EDIT NETWORK button
    Then I should be redirected on the edit network mode
    When I click on the ADD PLACE button
    Then the side dialog for the adding a place should be displayed
    When I add the information for the place
    Then I should click on CONFIRM button
    Then a pop up with the created place should appear on the map
    Then the new place should be displayed in Network Layers
    Then I should save the changes

Scenario: Creating a place by searching an address
    When I open the Jailbreak app
    When I should be redirected on the login page for Jailbreak
    Then I should log in with User B
    Then I should be redirected on the map with available transportation lanes
    Then I should click on EDIT NETWORK button
    Then I should be redirected on the edit network mode
    When I search an address
    Then a suggestion for the searched address should appear
    When I select the suggested address
    Then a pop up with the place should appear on the map
    When I click on SAVE PLACE button
    Then the place should be displayed in Network Layers
    Then I should save the changes

Scenario: Creating a place by clicking on the map - valid place
    When I open the Jailbreak app
    When I should be redirected on the login page for Jailbreak
    Then I should log in with User B
    Then I should be redirected on the map with available transportation lanes
    Then I should click on EDIT NETWORK button
    Then I should be redirected on the edit network mode
    Then I should select the tool for adding a place
    When I click on the map for adding a place
    Then a pop up with the selected place should appear on the map
    Then the newly created place should be displayed in Network Layers
    Then I should save the changes
    
Scenario: Creating a place by clicking on the map - invalid place
    When I open the Jailbreak app
    When I should be redirected on the login page for Jailbreak
    Then I should log in with User B
    Then I should be redirected on the map with available transportation lanes
    Then I should click on EDIT NETWORK button
    Then I should be redirected on the edit network mode
    Then I should select the tool for adding a place
    When I click on the map
    Then a pop up for entering the details for the place should be displayed
    When I enter the details for the place
    Then I should click on CONFIRM button
    Then the place should be displayed in Network Layers section
    Then I should save the changes
    
    