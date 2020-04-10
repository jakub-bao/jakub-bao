// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import "./utils/contains"
import "./utils/visit"
import "./utils/inputs"
import "./utils/getModule"
import "./login/login"
import "./moduleHelpers/filters"
import "./moduleHelpers/resolution"
import "./moduleHelpers/results"

// enable stubbing
Cypress.on('window:before:load', (win) => { win.fetch = null; });
