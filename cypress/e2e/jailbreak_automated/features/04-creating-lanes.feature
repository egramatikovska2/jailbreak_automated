Feature: Creating lanes

Scenario: Creating a direct lane by create connection button --- WIP
    When I open the Jailbreak app
    When I should be redirected on the login page for Jailbreak
    Then I should log in with User B
    Then I should be redirected on the map with available transportation lanes
    Then I should click on EDIT NETWORK button
    Then I should be redirected on the edit network mode
    When I click on the CREATE CONNECTION button
    Then the side dialog for creating a connection should be displayed
  
