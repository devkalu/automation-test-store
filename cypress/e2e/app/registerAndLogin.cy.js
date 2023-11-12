import userData from "../../fixtures/userData.json";
import registeredUsers from "../../fixtures/registeredUsers.json";
import RegistrationPage from "../../support/POM/RegistrationPage";

describe("Test to check registration and login process", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });
  context.only("Registration", () => {
    it.only("Successful Registration", () => {
      // cy.wrap(userData).each((user) => {
      //   cy.createAccount(user);
      // });
      cy.createAccount(userData[0]);
      RegistrationPage.assertSuccessfulRegistration;
    });
    it("Unsuccessful Registration", () => {
      cy.createAccount(registeredUsers[0]);
      RegistrationPage.assertFailureRegistration();
    });
  });
  context("Login", () => {
    it("Test for login process", () => {});
  });
});
