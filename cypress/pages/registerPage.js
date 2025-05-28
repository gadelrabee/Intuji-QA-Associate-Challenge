class RegisterPage {
    register(user) {
    cy.get("input[data-qa='signup-name']").type(user.username);
    cy.get("input[data-qa='signup-email']").type(user.email);
    cy.get("button[data-qa='signup-button']").click();

    cy.get("#id_gender1").check();
    cy.get("#password").type(user.password);
    cy.get("#days").select(user.day);
    cy.get("#months").select(user.month);
    cy.get("#years").select(user.year);

    cy.get("#first_name").type(user.firstname);
    cy.get("#last_name").type(user.lastname);
    cy.get("#address1").type(user.address);
    cy.get("#state").type(user.state);
    cy.get("#city").type(user.city);
    cy.get("#zipcode").type(user.zipcode);
    cy.get("#mobile_number").type(user.mobilenumber);
    cy.get("button[data-qa='create-account']").click();

    cy.contains("Account Created!").should("be.visible");
    cy.get("a[data-qa='continue-button']").click();
  };
};

export default RegisterPage;