class productPage {
  navigate() {
    cy.get("a[href='/products']").click();
  };
  filterWomenDress() {
    cy.get('a[href="#Women"]').click();
    cy.get('a[href="/category_products/1"]').click();
  };

  verifyProductDetails() {
    cy.get('a[href="/product_details/3"]').first().click();
    cy.get(".product-information").should("contain", "Sleeveless Dress")
      .and("contain", "Category: Women > Dress")
      .and("contain", "1000");
    cy.go('back');
  };
};
export default productPage;