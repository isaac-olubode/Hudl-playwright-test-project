Feature: User Login
  As a registered user
  I want to log in to Hudl.com platform
  So that I can access my account

  Background:
    Given the user navigates to login page

  Scenario: Successful login with valid credentials
    When the user enters a valid "<email>" and "<password>"
    Then the "<outcome>" should occur

    Examples:

      | email                    | password             | outcome                                       |
      | EnterAValidEmailAddress    | EnterValidPasswordHere | Login is Successful                         |

  Scenario: Unsuccessful login with incorrect password
    When the user enters an invalid "<email>" and "<password>"
    Then the "<outcome>" should occur
    Examples:
      | email                    | password             | outcome                                       |
      | EnterAValidEmailAddress  | IncorrectPassword    | Incorrect password error                      |

  Scenario: Unsuccessful login with invalid Email format
    When the user enters an invalid email address "<email>"
    Then the "<outcome>" should occur
    
    Examples:

      | email                    | password             | outcome                                       |
      | invalid.email@com        | somePassword           | Invalid email format error                  |
      |                          | somePassword           | Email required error                  |