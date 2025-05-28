class checkoutPage {
  proceedToCheckout() {
    cy.contains("Proceed To Checkout").click();
    cy.get('.form-control').type('This is for testing purpose.');
  };
  enterFakePayment(user) {
    cy.get('a[href="/payment"]').click();
    cy.get('input[name="name_on_card"]').type(user.nameoncard);
    cy.get('input[name="card-number"]').type(user.cardnumber);
    cy.get('inut[name="cvc"]').type(user.cvc);
    cy.get('input[name="card-number"]').type(user.expmonth);
    cy.get('input[name="expiry-year"]').type(user.expyear);
    cy.get('button[data-qa="pay-button"]').contains('Pay and Confirm Order').click();

  };
};
export default checkoutPage;