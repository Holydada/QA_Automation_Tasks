
# QA Week 2 – Cypress Automation Testing Essentials

This project contains **8 ready-to-run Cypress tests** that implement the Week 2 automation exercises.

## Prerequisites
- Node.js **v18+** and npm installed (LTS recommended).

## Setup
```bash
npm install
```

## Run the tests (headed GUI)
```bash
npx cypress open
```
Select any spec under `cypress/e2e` to run it.

## Run the tests (headless)
```bash
npm test
```

## Specs Included
1. **01_locators.cy.js** – ID, class, attribute selectors on Rahul Shetty Angular Practice site.
2. **02_modal_visibility.cy.js** – Modal visibility on DemoQA.
3. **03_login_invalid_valid.cy.js** – Invalid + valid login flow on Practice Test Automation.
4. **04_shop_link_href.cy.js** – Verify `href` for **Shop** link.
5. **05_checkbox_toggle.cy.js** – Select/Unselect a checkbox.
6. **06_multiple_checkboxes.cy.js** – Select multiple checkboxes by `value`.
7. **07_dropdown_selection.cy.js** – Select dropdown option by visible text and verify value.
8. **08_disabled_enable_input.cy.js** – Enable/disable control (the page exposes an **input** with Enable/Disable buttons; there is **no disabled checkbox** on this page, so this spec demonstrates the same concept with the built-in control).

> **Note**: Some public demo sites occasionally change locators or routes. The tests use resilient selectors and include comments for easy adjustment.

## Project Structure
```
qa-week2-cypress-exercises/
├─ package.json
├─ cypress.config.js
├─ cypress/
│  ├─ e2e/
│  │  ├─ 01_locators.cy.js
│  │  ├─ 02_modal_visibility.cy.js
│  │  ├─ 03_login_invalid_valid.cy.js
│  │  ├─ 04_shop_link_href.cy.js
│  │  ├─ 05_checkbox_toggle.cy.js
│  │  ├─ 06_multiple_checkboxes.cy.js
│  │  ├─ 07_dropdown_selection.cy.js
│  │  └─ 08_disabled_enable_input.cy.js
│  └─ support/
│     ├─ e2e.js
│     └─ commands.js
└─ README.md
```
