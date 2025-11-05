Feature: Editing lanes --- WIP

Scenario: Editing a lane via network map 
    When I open the Jailbreak app
    When I should be redirected on the login page for Jailbreak
    Then I should log in with User B
    Then I should be redirected on the map with available transportation lanes
    When I click on one of the lanes in MY LANES tab
    Then the detail card for the lane should be opened
    When I click on EDIT LANE button on the lane detail card
    Then I should be redirected on the lane details page
    

