Feature: Supplier - Creating a lane

Scenario: Creating origin and destination Gateways
     When I open the Jailbreak app
     Then I should log in as Supplier
     Then I should be redirected on the list with my transportation lanes
     When I click on the button for creating a new lane
     Then a side window for creating a lane should be displayed
     When I click on the button for creating a new Gateway
     Then a form for creating new Gateway should open
     When I enter the details for the origin Gateway
     Then I should save the origin Gateway
     Then I should assert that the origin Gateway has been created
     Then I should click on the button for creating a new Gateway
     Then I enter the details for the destination Gateway
     When I save the destination Gateway
     Then I should assert that the destination Gateway has been created

Scenario: Setting the Lane details - Date range ---- WIP
     When I open the Jailbreak app
     Then I should log in as Supplier
     Then I should be redirected on the list with my transportation lanes
     When I click on the button for creating a new lane
     Then a side window for creating a lane should be displayed
     When I click on the Date range
     Then the calendar should be displayed


     
     
     
