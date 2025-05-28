class homePage {
  visitPage() {
    cy.visit("https://automationexercise.com");
  }
  goToSignup() {
    cy.get("a[href='/login']").click();
  }
  logout() {
    cy.contains("Logout").click();
  }
}
export default homePage;