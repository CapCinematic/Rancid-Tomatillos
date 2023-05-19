describe('template spec', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)});

  it('Does not do much!', () => {
    expect(false).to.equal(false)})

  it('finds the content "movies"', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Movie')
  })

  it('clicks the link "Movie"', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Movie').click()
  })

  it('clicking "Movie" navigates to "SingleMovie" URL ', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Movie').click()
  })
  
});