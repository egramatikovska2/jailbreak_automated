Feature: Creating assets

Scenario: Creating stop by add place button
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
    
    