# 💻 Automated Testing Project with Cypress + Cucumber

This repository contains a suite of **E2E tests** using the **Cypress** framework and **Cucumber (Gherkin)** syntax, for the DEMO QA application

---

## 🧱 Project Structure
```
cypress/
├── e2e/
│   ├── api/                  # API tests
│   │   ├──apitesting.cy.js       
│   │
│   ├── features/              # Gherkin feature files
│   │   ├── demoQA.feature
│   └── step-definitions/      # Step definitions matching each feature
│       ├── demoQA.js
├── fixtures/                  # Page Object Model (POM) using JSON for selectors
│   ├── demoqaPOM.json
├── downloads/                 # Downloaded files (if any)
├── support/                   # Cypress support files (e.g. commands, setup)
cypress.config.js              # Cypress configuration
package.json                   # Project dependencies and scripts
package-lock.json              # Lock file
README.md               
```


---

## 🎯 Key Practices and Patterns

### 📌 POM - Page Object Model
- The files in the `fixtures/` folder represent pages of the application.
- All selectors and page elements are defined and reused through step definitions.
- **Goal:** Separate selector logic from step logic, making maintenance and updates simpler.


---

### 📌 DDT - Simple Data-Driven Testing
- Test data like user roles and credentials are used dynamically in step definitions through feature file parameters.
- Prevents duplication and tight coupling between test logic and data.


---

### 💡 Best Practices Applied

| Practice  | Description |
|----------|-------------|
| **DRY** (Don't Repeat Yourself) | Page selectors are reused through JSON fixtures. |
| **KISS** (Keep It Simple, Stupid) | Step definitions are short and focused. |
| **YAGNI** (You Aren’t Gonna Need It) | Only essential flows are implemented. |
| **Single Responsibility** | Each feature and step-definition file has a specific purpose. |

---

### 🚀 Running the Tests

```bash
# Install dependencies
npm install

# Run all tests in headless mode
npx cypress run

# Open the Cypress Test Runner in interactive mode
npx cypress open


```
---

### 🔧 Tools Used
Cypress

Cucumber (Gherkin Syntax) via cypress-cucumber-preprocessor

JavaScript

JSON Fixtures for POM and test data

Allure for QA report

---

### 📌 Notes
API tests are included in this project.

POMs are implemented using .json files for ease of access and modularity.

Gherkin syntax provides a clear and human-readable way to define test scenarios.

---

### 📂 Selector Organization

All selectors are centralized within the POMs in the fixtures folder
