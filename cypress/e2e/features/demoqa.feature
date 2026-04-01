Feature: DEMO QA
@focus
Scenario: Visiting DEMO QA, submiting new Text-box form and validating data created

Given the user visit "DEMOQA" text-box page
When the user fill all required field at "DEMOQA" text-box page
And the user click at the "SubmitButton" at "DEMOQA" text-box page
Then the user must be able to visualize the output values accordingly to sent form
