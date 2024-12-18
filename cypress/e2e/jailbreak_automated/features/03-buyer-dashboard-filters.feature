Feature: Buyer - Filtering lanes

Scenario: Map View - Filter lanes by existing Origin (City)
    Given I open the Jailbreak app
    Then I should log in as Buyer
    Then I should be redirected on the map with available transportation lanes
    Then I should type LAWRENCEVILLE as an origin city in the lanes' filters
    When I click on SEARCH button
    Then results should be displayed regarding the search

Scenario: Map View - Filter lanes by non-existing Origin(City)
    Given I open the Jailbreak app
    Then I should log in as Buyer
    Then I should be redirected on the map with available transportation lanes
    Then I should type SKOPJE as an origin city in the lanes' filters
    When I click on SEARCH button
    Then no results should be displayed regarding the search

Scenario: Map View - Filter lanes by non-existing Destination(City)
    Given I open the Jailbreak app
    Then I should log in as Buyer
    Then I should be redirected on the map with available transportation lanes
    Then I should type SKOPJE as a destination city in the lanes' filters
    When I click on SEARCH button
    Then no results should be displayed regarding the search

Scenario: Map Vire - Filter lanes by existing Date range
    Given I open the Jailbreak app
    Then I should log in as Buyer
    Then I should be redirected on the map with available transportation lanes
    Then I should choose a date range



