class RegistrationPage {
  constructor() {
    this.continueToRegistrationBtn = "button[title='Continue']";
    this.inputFirstName = "input#AccountFrm_firstname";
    this.inputLastName = "input#AccountFrm_lastname";
    this.inputEmail = "input#AccountFrm_email";
    this.inputTelephone = "input#AccountFrm_telephone";
    this.inputFax = "input#AccountFrm_fax";
    this.inputCompany = "input#AccountFrm_company";
    this.inputAddress = "input#AccountFrm_address_1";
    this.inputCity = "input#AccountFrm_city";
    this.selectRegion_State = "select#AccountFrm_zone_id";
    this.inputZipCode = "input#AccountFrm_postcode";
    this.selectCountry = "select#AccountFrm_country_id";
    this.inputLoginName = "input#AccountFrm_loginname";
    this.inputPassword = "input#AccountFrm_password";
    this.inputConfirmPassword = "input#AccountFrm_confirm";
    this.subscribeNewsLetter =
      '[class="registerbox form-horizontal"] > fieldset';
    this.selectNewsLetter = "input#AccountFrm_newsletter1";
    this.notSelectNewsLetter = "input#AccountFrm_newsletter0";
    this.agreeToTermsCheckBox = "input#AccountFrm_agree";
    this.submitRegistrationBtn = "button[type='submit'][title='Continue']";
    this.registrationFailureDiv = "[class='alert alert-error alert-danger']";
    this.registrationSuccessDiv = ".heading1 > .maintext";
  }

  clickOnContinueToRegistrationBtn() {
    cy.get(this.continueToRegistrationBtn).click();
  }
  typeFirstName(name) {
    cy.typeValue(this.inputFirstName, name);
  }
  typeLastName(name) {
    cy.typeValue(this.inputLastName, name);
  }
  typeEmail(email) {
    cy.typeValue(this.inputEmail, email);
  }
  typeTelephone(number) {
    cy.typeValue(this.inputTelephone, number);
  }
  typeFax(number) {
    cy.typeValue(this.inputFax, number);
  }
  typeCompany(company) {
    cy.typeValue(this.inputCompany, company);
  }
  typeAddress(address) {
    cy.typeValue(this.inputAddress, address);
  }
  typeCity(city) {
    cy.typeValue(this.inputCity, city);
  }
  chooseRegion(region) {
    cy.selectOption(this.selectRegion_State, region);
  }
  typeZipCode(zipCode) {
    cy.typeValue(this.inputZipCode, zipCode);
  }
  chooseCountry(country) {
    cy.selectOption(this.selectCountry, country);
  }
  typeLoginName(loginName) {
    cy.typeValue(this.inputLoginName, loginName);
  }
  typePassword(password) {
    cy.typeValue(this.inputPassword, password);
  }
  typePasswordConfirm(password) {
    cy.typeValue(this.inputConfirmPassword, password);
  }
  chooseNewsLetterOptions(option) {
    cy.get(this.subscribeNewsLetter).then((subscribe) => {
      cy.log(subscribe);
      if (option) {
        cy.get(this.selectNewsLetter).check();
      } else {
        cy.get(this.notSelectNewsLetter).check();
      }
    });
  }

  checkAgreeToTerm() {
    cy.get(this.agreeToTermsCheckBox).check();
  }
  clickSubmitRegistration() {
    cy.get(this.submitRegistrationBtn).click();
  }
  assertFailureRegistration() {
    cy.get(this.registrationFailureDiv).should(
      "contain",
      "Error: E-Mail Address is already registered!"
    );
  }
  assertSuccessfulRegistration() {
    cy.get(this.registrationSuccessDiv).should(
      "contain",
      "YOUR ACCOUNT HAS BEEN CREATED!"
    );
  }
}

export default new RegistrationPage();
