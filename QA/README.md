# TravelVoyage – Selenium UI Testing

This repository contains my Selenium-based UI testing project for the **TravelVoyage** web application.

The purpose of this project is to practice and demonstrate software testing skills using **Selenium WebDriver, Java, TestNG, and Maven**. The tests focus on important user flows such as authentication, registration, and booking.


**TravelVoyage Application Repository:**

*https://github.com/KavishkaDevindi/TravelVoyage.git*

## Testing Scope

The current Selenium test suite covers:

* Login testing
* Registration testing
* Booking testing
* Positive test scenarios
* Negative test scenarios
* Form validation
* Error message validation
* Basic UI element interaction
* URL validation

## Tools & Technologies

| **Tool / Technology** | **Purpose**                |
| --------------------- | -------------------------- |
| Java                  | Programming language       |
| Selenium WebDriver    | Browser automation         |
| TestNG                | Test framework             |
| Maven                 | Project and test execution |
| Google Chrome         | Browser                    |
| ChromeDriver          | Chrome browser driver      |
| VS Code               | Development environment    |
| Git                   | Version control            |
| GitHub                | Source code repository     |


# Test Cases

## 1. Login Testing

The login test cases verify successful login behavior and validation of invalid login attempts.

| **Test Case** | **Scenario**                 | **Expected Result**                   | **Status** |
| ------------- | ---------------------------- | ------------------------------------- | ---------- |
| LOGIN-01      | Valid email + valid password | User can log in successfully          | PASS       |
| LOGIN-02      | Empty email + empty password | Validation/error message is displayed | PASS       |
| LOGIN-03      | Valid email + wrong password | Error message is displayed            | PASS       |
| LOGIN-04      | Wrong email + valid password | Error message is displayed            | PASS       |
| LOGIN-05      | Empty email + valid password | Validation/error message is displayed | PASS       |
| LOGIN-06      | Valid email + empty password | Validation/error message is displayed | PASS       |

### Login Testing Focus

The login tests verify both:

* Positive login behavior with valid credentials
* Negative login behavior using invalid or missing credentials

## 2. Registration Testing

The registration tests verify successful registration and validation of user input.

| **Test Case** | **Scenario**                              | **Expected Result**                  | **Status** |
| ------------- | ----------------------------------------- | ------------------------------------ | ---------- |
| REG-01        | Valid name + valid email + valid password | Registration is successful           | PASS       |
| REG-02        | All required fields empty                 | Registration should not be submitted | PASS       |
| REG-03        | Invalid email format                      | Email validation is displayed        | PASS       |
| REG-04        | Invalid/weak password                     | Password validation is displayed     | PASS       |
| REG-05        | Full name is empty                        | Name validation is displayed         | PASS       |

### Registration Testing Focus

The registration tests cover:

* Valid registration
* Required field validation
* Invalid email input
* Password validation
* Form validation behavior

## 3. Booking Testing

The booking tests verify the booking form using both valid and invalid input scenarios.

| **Test Case** | **Scenario**                               | **Expected Result**               | **Status** |
| ------------- | ------------------------------------------ | --------------------------------- | ---------- |
| BOOK-01       | All required fields filled with valid data | Booking is submitted successfully | FAIL       |
| BOOK-02       | Required booking fields left empty         | Booking should not be submitted   | PASS       |

### Booking Testing Focus

**BOOK-01** is a positive test case because valid data is entered into all required fields and the expected result is successful booking submission.

**BOOK-02** is a negative test case because required information is intentionally left empty to verify form validation.

# Test Execution

The Selenium tests can be executed using Maven.

*mvn test*

Maven executes the TestNG test classes and reports the test results in the terminal.


# Application Under Test

The Selenium tests are designed to run against the locally hosted TravelVoyage application.

The current local frontend URL is:

*http://localhost:5173*

Example application pages:

*Login    → http://localhost:5173/login
Register → http://localhost:5173/register*

The exact booking URL may depend on the current version of the TravelVoyage application.

## Repository Purpose

This repository is part of my QA portfolio and demonstrates my practical learning and experience in software testing and Selenium UI automation.
