describe('Sign Up', () => {
  it('Adds person to course', () => {
    cy.visit('/')

    cy.get('input[name="name"]')
      .click()
      .type('Some Name')
      .should('have.value', 'Some Name')

    cy.get('input[name="email"]')
      .click()
      .type('some@email.com')

    cy.get('select[name="department"]')
      .select('core')
      .should('have.value', 'core')

    cy.get('select[name="course"]')
      .select('git-it')
      .should('have.value', 'git-it')

    cy.get('input[type="submit"]')
      .click()
    //Save-People had a setTimout which was not fixed, so the test passed sometimes and failed, since this
    //is not an API call that can be intercepted, just added a simple wait.
    
    //Would love to know if there was any other way to solve this.  
    cy.wait(2000)

    cy.get('li')
      .should('contain', 'Some Name - some@email.com - core - git-it')
  })
})
