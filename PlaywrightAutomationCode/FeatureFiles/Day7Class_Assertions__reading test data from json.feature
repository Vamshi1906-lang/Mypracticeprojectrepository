Feature: I Verify the Assertions

@Assertions1

Scenario: I verify the playwright Assertions
Given I Launch the browser7
Then I launch the amazon website
Then I verify the hard Assertions
And I close the browser7

@Assertions2
Scenario: I verify the playwright Assertions
Given I Launch the browser7
Then I launch the amazon website
Then I verify the soft Assertions
And I close the browser7