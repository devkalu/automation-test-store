// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import RegistrationPage from "./POM/RegistrationPage";
import HomePage from "./POM/HomePage";

var fs = require("fs");

Cypress.Commands.add("typeValue", (inputElement, value) => {
  cy.get(inputElement).type(value);
});

Cypress.Commands.add("selectOption", (selectElement, value) => {
  cy.get(selectElement).select(value);
});

Cypress.Commands.add("createAccount", (user) => {
  HomePage.NavigateToLoginAndRegistration();
  RegistrationPage.clickOnContinueToRegistrationBtn();
  RegistrationPage.typeFirstName(user.firstName);
  RegistrationPage.typeLastName(user.lastName);
  RegistrationPage.typeEmail(user.email);
  RegistrationPage.typeTelephone(user.telephone);
  RegistrationPage.typeFax(user.fax);
  RegistrationPage.typeCompany(user.company);
  RegistrationPage.typeAddress(user.address);
  RegistrationPage.typeCity(user.city);
  RegistrationPage.chooseCountry(user.country);
  RegistrationPage.chooseRegion(user.state);
  RegistrationPage.typeZipCode(user.zipCode);
  RegistrationPage.typeLoginName(user.loginName);
  RegistrationPage.typePassword(user.password);
  RegistrationPage.typePasswordConfirm(user.password);
  RegistrationPage.chooseNewsLetterOptions(user.getNewsLetter);
  RegistrationPage.checkAgreeToTerm();
  RegistrationPage.clickSubmitRegistration();
});

Cypress.Commands.add("loginUser", (user) => {});
