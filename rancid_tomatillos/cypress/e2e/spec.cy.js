describe("Moldy Mangos", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the title of the application", () => {
    cy.contains("Moldy Mangos").should("be.visible");
  });

  it("should display a collection of movies when loaded", () => {
    cy.contains("Black Adam").should("exist");
    cy.contains("The Woman King").should("exist");
    cy.contains("Rise of the Damned").should("exist");
    cy.contains("Wakanda Forever").should("exist");
  });

  // it('clicks the link "Movie"', () => {

  //   cy.contains('Movie')
  // })

  // it('clicking "Movie" navigates to "SingleMovie" URL ', () => {

  //   // cy.contains('Movie').click()
  //   cy.url().should('include', "3000")
  // })

  it("should have additional details about that movie when clicked ", () => {
    cy.get(".cards").first().click();
    cy.contains("Nearly 5,000 years after");
  });

  it("user clicks on a movie and the details page is rendered, the URL updates to reflect that movie’s unique ID as well", () => {
    cy.get(".cards").first().click();
    cy.url().should("match", /436270/);
  });
});

// As a user, when I load the application, I can see the title of the application CHECKED
// As a user, when I load the application, I can see a collection of movies. CHECKED
// As we hover over in cypress it shows the movies we have checked
// As a user, when I click on a movie, I’m shown additional details about that movie
// When a user clicks on a movie and the details page is rendered, the URL updates to reflect that movie’s unique ID as well
