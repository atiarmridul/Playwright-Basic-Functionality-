# Codebase Notes

## Overview
- Playwright test project targeting SauceDemo and Playwright docs.
- Two separate Playwright configs exist (JS and TS), each with its own testDir.

## Key Paths
- Configs: `playwright.config.js`, `playwright.config.ts`
- Page objects: `pages/loginpage.js`, `pages/inventory.js`, `pages/landing.js`
- Tests (JS): `tests/purchase.spec.js`, `tests/productSorting.spec.js`
- Tests (TS sample): `e2e/example.spec.ts`
- Tooling: `eslint.config.mjs`, `package.json`

## How Tests Are Organized
- JS tests in `tests/` use page objects in `pages/`.
- TS sample test in `e2e/` is Playwright starter content.
- `playwright.config.js` points to `./tests`.
- `playwright.config.ts` points to `./e2e`.

## Page Object Summary
- `LoginPage`: navigates to SauceDemo and logs in with credentials.
- `InventoryPage`: adds two items to cart, verifies cart items, completes checkout.
- `LandingPage`: sorts products and attempts to verify sorting.

## Known Risks / Gotchas
- Sorting verification in `pages/landing.js` mutates the same array, so it can pass even when UI sorting is wrong.
- `products` array in `pages/landing.js` is module-scoped and never cleared between runs.
- Two configs can cause confusion unless `--config` is specified.
- `returnToProducts` selector in `pages/inventory.js` uses a role name that may not match the UI label.

## Running Tests
- Use `npx playwright test --config playwright.config.js` for `tests/`.
- Use `npx playwright test --config playwright.config.ts` for `e2e/`.

## Notes
- `package.json` has no scripts; tests are run via `npx`.
