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

})