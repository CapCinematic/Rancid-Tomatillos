describe('Home View', () => {
  beforeEach(() => {
    cy.intercept("GET", "**/movies/**", {fixture: "movie.json"})
    cy.visit("http://localhost:3000");
  });


  it("should display the title of the application upon page load", () => {
    cy.contains("Moldy Mangos").should("be.visible");
  });

  it("should display a collection of movies when loaded", () => {
    cy.contains("Black Adam").should("exist");
    cy.contains("The Woman King").should("exist");
    cy.contains("Rise of the Damned").should("exist");
    cy.contains("Wakanda Forever").should("exist");
  });

  it("should display movie titles and ratings", () => {
    cy.contains("h2", "Blowback")
    cy.contains("h3", 5)
  })

  it("should display an error message if request is not fulfilled for page load", () => {
    cy.intercept({
      method: 'GET',
      url: "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
    },
      {
        statusCode: 500,
        body: {
          message: 'Issue with request'
        }
      })
  })
})



describe("Single Movie View", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });



  it("should display the movie tagline and synopsis about that movie when clicked ", () => {
    cy.get(".cards").first().click()
    cy.contains("Nearly 5,000 years after")
    cy.contains("The world needed a hero.")
  });

  it("should display movie's release date and run time when clicked ", () => {
    cy.get(".cards").last().click()
    cy.contains("p", "106 Mins")
    cy.contains("p", '2022-03-17')
  });

  it("should display movie's title and budget when clicked ", () => {
    cy.get(".cards").last().click()
    cy.contains("p", "X")
    cy.contains("p", '10000000')
  });

  it("As a user when I click on a movie the details page is rendered, the URL updates to reflect that movie’s unique ID as well", () => {
    cy.get(".cards").first().click();
    cy.url().should("match", /436270/);
  });

  it("As a user when I am viewing a single movie and press the Home button, the URL should update", () => {
    cy.get(".cards").first().click();
    cy.url().should("match", /436270/);
    cy.get("button").click()
      .visit("http://localhost:3000")
  })

  it("As a user, when I click the Home button I should be able to see all of the movies", () => {
    cy.get(".cards").first().click();
    cy.get("button").click()
    cy.go('back')
      .contains("Moldy Mangos")
  })

  it("should display an error message if request is not fulfilled for page load of single movie", () => {
    cy.intercept({
      method: 'GET',
      url: "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
    },
      {
        statusCode: 500,
        body: {
          message: 'Our bad. One moment please'
        }
      })
  })
});





