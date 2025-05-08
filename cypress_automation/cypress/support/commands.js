// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("getById", (selector, ...args) => {
    return cy.get(`[id=${selector}]`, ...args)
  })
  
  Cypress.Commands.add(
    "login",
    (username, password) => {
      const signinPath = "/"
      const log = Cypress.log({
        name: "login",
        displayName: "LOGIN",
        message: [`🔐 Authenticating | ${username}`],
        // @ts-ignore
        autoEnd: false,
      })
  
      cy.location("pathname", { log: false }).then((currentPath) => {
        if (currentPath !== signinPath) {
          cy.visit(signinPath)
        }
      })
  
      log.snapshot("before")
  
      cy.getById("user-name").type(username)
      cy.getById("password").type(password)

      cy.getById("login-button").click()
    }
  )
  