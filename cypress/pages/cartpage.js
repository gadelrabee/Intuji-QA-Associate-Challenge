class cartPage {
  addMultipleItems() {
    // adding product from dress category
    cy.get('a[href="/product_details/3"]').click();
    cy.get('.btn.btn-default.cart').click();
    cy.get(".btn.btn-success.close-modal.btn-block").should("contain","Continue Shopping").click();
    cy.go('back');
    
    
    // adding product form tops category
    cy.get('a[href="#Women"]').click();
    cy.get('a[href="/category_products/2"]').should("have.text","Tops ").click();
    cy.url().should('include', '/category_products/2');

    cy.get('a[href="/product_details/1"]').click();
    cy.get('.btn.btn-default.cart').click();
    cy.get(".btn.btn-success.close-modal.btn-block").should("contain","Continue Shopping").click();
    cy.go('back');

    // adding product form saree category
    cy.get('a[href="#Women"]').click();
    cy.get('a[href="/category_products/7"]').should("have.text","Saree ").click();
    cy.url().should('include', '/category_products/7');

    cy.get('a[href="/product_details/39"]').click();
    cy.get('.btn.btn-default.cart').click();
    cy.get(".btn.btn-success.close-modal.btn-block").should("contain","Continue Shopping").click();
    cy.go('back');
  };

   viewCart(){
    cy.contains(' Cart').click();
  };

  updateQuantity() {
    cy.get('a[href="/product_details/39"]').click();
    cy.get('#quantity').clear().type('2');
    cy.get('.btn.btn-default.cart').click();
    cy.get(".btn.btn-success.close-modal.btn-block").should("contain","Continue Shopping").click();
    cy.go('back');
  };
  removeProduct() {
    cy.get(".cart_delete a").first().click();
    cy.get(".cart_description").should("not.contain", "Sleeveless Dress");
  };
};
export default cartPage;