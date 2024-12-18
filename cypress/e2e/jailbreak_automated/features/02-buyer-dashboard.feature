Feature: Buyer - Dashboard features

Scenario: Buyer - Map View - Lane preview
    When I open the Jailbreak app
    Then I should log in as Buyer
    Then I should be redirected on the map with available transportation lanes
    When I click on one of the lanes' origin
    Then I should see the lane's preview with its information
    Then I should assert the lane's information

Scenario: Buyer - Opening lane from Map View
    When I open the Jailbreak app
    Then I should log in as Buyer
    Then I should be redirected on the map with available transportation lanes
    When I click on one of the lanes' origin
    Then I should see the lane's preview with its information
    When I click on SEE LANE DETAILS button
    Then I should be redirected on the lane's details page
    Then I should assert the lane's details page

Scenario: Buyer - List View
    When I open the Jailbreak app
    Then I should log in as Buyer
    Then I should be redirected on the map with available transportation lanes
    When I click on LIST VIEW button
    Then I should be switched to list view of the lanes

Scenario: Buyer - Opening lane from List View
    When I open the Jailbreak app
    Then I should log in as Buyer
    Then I should be redirected on the map with available transportation lanes
    When I click on LIST VIEW button
    Then I should be switched to list view of the lanes
    When I open one of the lanes
    Then I should be redirected on the lane's details page
    Then I should assert the lane's details page
