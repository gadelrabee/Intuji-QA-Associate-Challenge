class loginPage{
    userLogin(user){
        // cy.visit('/login');
        cy.get('a[href="/login"]').click();
        cy.get('input[data-qa="login-email"]').clear().type(user.email);
        cy.get('input[data-qa="login-password"]').clear().type(user.password);
        cy.get('button[data-qa="login-button"]').click();
    };
};

export default loginPage;