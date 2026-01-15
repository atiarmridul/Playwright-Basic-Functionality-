# Playwright Basic Functionality

End-to-end tests for SauceDemo using Playwright and a small page-object layer.

## Requirements
- Node.js (LTS recommended)
- npm

## Setup
```bash
npm install
```

## Run Tests
This repo has two Playwright configs, each pointing to a different test folder.

- JS tests in `tests/`:
```bash
npx playwright test --config playwright.config.js
```

- TS sample tests in `e2e/`:
```bash
npx playwright test --config playwright.config.ts
```

## Project Layout
- `pages/` page objects for SauceDemo flows
- `tests/` JS test suite using page objects
- `e2e/` sample Playwright tests
- `playwright.config.js` config for `tests/`
- `playwright.config.ts` config for `e2e/`

## Notes
- Reports are generated in `playwright-report/` by default.
