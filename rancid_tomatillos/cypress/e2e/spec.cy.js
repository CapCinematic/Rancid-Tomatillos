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

  
  it("should have additional details about that movie when clicked ", () => {
    cy.get(".cards").first().click();
    cy.contains("Nearly 5,000 years after");
  });
  
  it("user clicks on a movie and the details page is rendered, the URL updates to reflect that movie’s unique ID as well", () => {
    cy.get(".cards").first().click();
    cy.url().should("match", /436270/);
  });
  
  it("should be able to test stub data if API is down", () => {
    cy.intercept("GET", "**/movies/**", {fixture: "movie.json"})
  });
});
