describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('click home button',()=>{
    cy.contains('Home').click()
  })

  it('click units button and redirect units page',()=>{
    cy.contains('Units').click()
  })

  it('click ages buttons and filter data',()=>{
    cy.contains('Units').click()

    // Filter dark button 
    cy.contains('Dark').click()
    cy.get('td').contains('Feudal').should('not.exist')
    cy.get('td').contains('Dark').should('exist')

  })

  it('click costs buttons and filter data',()=>{
    cy.contains('Units').click()

    // Check food button
    cy.contains('Food')
    .parent()
    .find('input[type=checkbox]')
    .check()
  })

  it('trigger input range',()=>{
    cy.contains('Units').click()

    // Check food button
    cy.get('input[type=range]')
    .invoke('val', 50)
    .trigger('change')
  })

})