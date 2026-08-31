Feature: Verify the Filters and alerts

@filter

Scenario: I Verify the filters and alerts
Given I Launch the browser9
Then I launch the Sauce demo website
Then I verify the filters
And I close the browser9

@alerts1

Scenario: I Verify the alerts
Given I Launch the browser9
Then I launch the heroku app
Then I verify the alerts
And I close the browser9

@alerts2

Scenario: I Verify the alerts
Given I Launch the browser9
Then I launch the heroku app
Then I verify confirmation alert ok
And I close the browser9

@alerts3

Scenario: I Verify the alerts
Given I Launch the browser9
Then I launch the heroku app
Then I verify confirmation alert cancel
And I close the browser9

@alerts4

Scenario: I Verify the alerts
Given I Launch the browser9
Then I launch the heroku app
Then I verify Prompt alert ok without text
And I close the browser9

@alerts5

Scenario: I Verify the alerts
Given I Launch the browser9
Then I launch the heroku app
Then I verify Prompt alert with text
And I close the browser9

@alerts6

Scenario: I Verify the alerts
Given I Launch the browser9
Then I launch the heroku app
Then I verify alert messages using with assertions1
And I close the browser9

@alerts7

Scenario: I Verify the alerts
Given I Launch the browser9
Then I launch the heroku app
Then I verify alert messages using with assertions2
And I close the browser9