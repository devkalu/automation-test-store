class HomePage {
  constructor() {
    this.loginAndRegistrationNav = "#customer_menu_top > li > a";
  }

  NavigateToLoginAndRegistration() {
    cy.get(this.loginAndRegistrationNav).click();
  }
}

export default new HomePage();
