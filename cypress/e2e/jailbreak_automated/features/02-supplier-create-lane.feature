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

Scenario: Setting a Date Range
     When I open the Jailbreak app
     Then I should log in as Supplier
     Then I should be redirected on the list with my transportation lanes
     When I click on the button for creating a new lane
     Then a side window for creating a lane should be displayed
     When I click on the Date range field
     Then the calendar should be displayed
     Then I should choose the start date 
     When I choose the end date
     Then the calendar should close

Scenario: Setting the Weekdays
     When I open the Jailbreak app
     Then I should log in as Supplier
     Then I should be redirected on the list with my transportation lanes
     When I click on the button for creating a new lane
     Then a side window for creating a lane should be displayed
     Then I should select Monday, Wednesday and Friday as service days

Scenario: Setting the Trip start and finish time
     When I open the Jailbreak app
     Then I should log in as Supplier
     Then I should be redirected on the list with my transportation lanes
     When I click on the button for creating a new lane
     Then a side window for creating a lane should be displayed
     Then I should set the trip start time
     Then I should set the trip finish time

Scenario: Setting the Trip drop off start and end window
     When I open the Jailbreak app
     Then I should log in as Supplier
     Then I should be redirected on the list with my transportation lanes
     When I click on the button for creating a new lane
     Then a side window for creating a lane should be displayed
     Then I should set the trip drop off start window
     Then I should set the trip drop off end window

Scenario: Setting the Trip pick up start and end window
     When I open the Jailbreak app
     Then I should log in as Supplier
     Then I should be redirected on the list with my transportation lanes
     When I click on the button for creating a new lane
     Then a side window for creating a lane should be displayed
     Then I should set the trip pick up start window
     Then I should set the trip pick up end window

Scenario: Setting the Capacity and Pricing
     When I open the Jailbreak app
     Then I should log in as Supplier
     Then I should be redirected on the list with my transportation lanes
     When I click on the button for creating a new lane
     Then a side window for creating a lane should be displayed
     Then I should set the CBs per day 
     Then I should set the price per CB
     Then I should set the spot rate price
     Then I should set the reservation fee percentage
     Then I should set the free cancelation period

Scenario: Creating a lane with all information provided --- WIP
     When I open the Jailbreak app
     Then I should log in as Supplier
     Then I should be redirected on the list with my transportation lanes
     When I click on the button for creating a new lane
     Then a side window for creating a lane should be displayed
     Then I should provide all the information for the lane
     When I save the lane
     Then I should close the side window
   




     
     
     
