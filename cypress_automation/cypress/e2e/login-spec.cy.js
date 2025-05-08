describe('Unauthenticated User Test', () => {
  it('Successfully go to index page', () => {
    cy.visit('/')

    cy.url().should('include', '/')
  })

  it('Could not access /inventory.html endpoint when not logged in', () => {
    cy.visit('/inventory.html', { failOnStatusCode: false })

    cy.url().should('include', '/')

    cy.url().should('not.include', '/inventory.html')
  })
})

describe('Authenticated User Tests', () => {
  it('Successfully go to index page', () => {
    cy.visit('/');
    
    cy.url().should('include', '/');
  })

  it('Could login and be redirected to /inventory.html', () => {
    cy.login('standard_user', 'secret_sauce')

    cy.url().should('include', '/inventory.html')
  })
})

describe('Failed Login Tests', () => {
  it('Successfully go to index page', () => {
    cy.visit('/');
    
    cy.url().should('include', '/');
  })

  it('Failed to login due to wrong login information', () => {
    cy.login('wrong_username', 'wrong_password')

    cy.url().should('include', '/')
    cy.url().should('not.include', '/invetory.html')
  })
})