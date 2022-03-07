cy.visit('https://demoqa.com/login');
    
cy.get('#newUser').click();
cy.get('#firstname').type('Feliphe');
cy.get('#lastname').type('Pinto');
cy.get('#userName').type('felipherg');
cy.get('#password',{timeout: 500}).type('123456');
cy.intercept('POST','/Account/v1/User').as('post');
cy.frameLoaded('[title="reCAPTCHA"][src*="google"]')