// integration/intujiChallenge.spec.js
import { faker } from '@faker-js/faker';
import homePage from '../pages/homepage';
import productPage from '../pages/productpage';
import cartPage from '../pages/cartpage';
import checkoutPage from '../pages/checkoutpage';
import registerPage from '../pages/registerPage';
import loginPage from '../pages/loginpage';
// import user from '../fixtures/user.json';


describe("Intuji QA Challenge", () => {
  const HomePage = new homePage();
  const ProductPage = new productPage();
  const CartPage = new cartPage();
  const CheckoutPage = new checkoutPage();
  const RegisterPage = new registerPage();
  const LoginPage = new loginPage();
  let user;

  before(() => {
    cy.fixture('user').then((testData) => {
      user = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: testData.password,
        day: testData.day,
        month: testData.month,
        year: testData.year,
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        address: faker.location.streetAddress(),
        company: faker.company.name(),
        country: testData.country,
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        mobilenumber: faker.phone.number(),
        nameoncard: faker.person.fullName(),
        cardnumber: faker.finance.creditCardNumber(),
        cvc: faker.finance.creditCardCVV(),
        expmonth: faker.date.month(),
        expyear: faker.date.future({years: 4 })

      };
    });
  });

  it("Register, Add to Cart, Checkout and Re-login", () => {
    HomePage.visitPage();
    HomePage.goToSignup();
  
    // registerpage populate
    RegisterPage.register(user);

    cy.getCookies().should('exist');

    ProductPage.navigate();
    ProductPage.filterWomenDress();
    cy.get(".title.text-center").contains("Women - Dress Products").should("be.visible");
    // cy.intercept('GET', '').as('getProducts');
    // ProductPage.filterWomenDress();
    // cy.wait('@getProducts').its('response.statusCode').should('eq', 200);
    ProductPage.verifyProductDetails();

    CartPage.addMultipleItems();
    CartPage.viewCart();
    // cart verification
    cy.get('.cart_description').should('contain', 'Sleeveless Dress')
    .and('contain', 'Blue Top')
    .and('contain', 'Cotton Silk Hand Block Print Saree');
    
    cy.go('back');
    CartPage.updateQuantity();
    CartPage.viewCart();
    //cart upadate verification
    cy.get('#product-39 td .disabled').should('have.text','3');
    cy.get('#product-39 td .cart_total_price').should('have.text','Rs. 9000');

    CartPage.removeProduct();

    CheckoutPage.proceedToCheckout();
    // checkout page verification
    cy.get('h4').should('contain', 'Total Amount');
    cy.get('td .cart_total_price').should('contain', 'Rs. 9500');

    CheckoutPage.enterFakePayment(user);
    cy.contains('Order Placed!');
    cy.contains('Congratulations! Your order has been confirmed!');


    HomePage.logout();

    LoginPage.userLogin(user);
  });
});
