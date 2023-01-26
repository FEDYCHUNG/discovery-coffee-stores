/// <reference types="cypress" />

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should finf Pontianak Store", () => {
    cy.get("h2").contains("Pontianak Store");
  });
});
