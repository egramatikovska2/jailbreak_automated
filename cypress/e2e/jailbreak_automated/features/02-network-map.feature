Feature: Network Map

  Scenario: Validating the filters
    When I open the Jailbreak app
    When I should be redirected on the login page for Jailbreak
    Then I should log in with User B
    Then I should be redirected on the map with available transportation lanes
    Then I should validate the filters on the Network Map

  Scenario: Validating the sidebar
    When I open the Jailbreak app
    Then I should be redirected on the login page for Jailbreak
    Then I should log in with User B
    Then I should be redirected on the map with available transportation lanes
    Then I should validate the sidebar on the left side of the map
    
  Scenario: Validating the map
    When I open the Jailbreak app
    Then I should be redirected on the login page for Jailbreak
    Then I should log in with User B
    Then I should be redirected on the map with available transportation lanes
    Then I should validate the map