Feature: Creating places

Scenario: Adding places before running the other tests
    When I open the Jailbreak app
    When I should be redirected on the login page for Jailbreak
    Then I should log in with User B
    Then I should be redirected on the map with available transportation lanes
    Then I should click on EDIT NETWORK button
    Then I should be redirected on the edit network mode
    Then I should add a few places on the map
    Then I should save the changes
    