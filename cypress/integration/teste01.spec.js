/// <reference types="cypress" />

it('Funcionalidade:Forms',()=>{
cy.visit('https://demoqa.com/broken');

cy.get(':nth-child(2) > .group-header > .header-wrapper').click();
cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click();
cy.get('#firstName').should('be.visible').type('Feliphe');
cy.get('#lastName').should('be.visible').type('Pinto');
cy.get('#userEmail').should('be.visible').type('felipherg@gmail.com');
cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
cy.get('#userNumber').should('be.visible').type('8399219452');
//DataAniversario
cy.get('#dateOfBirthInput').click();
cy.get('.react-datepicker__month-select').should('be.visible').select('December');
cy.get('.react-datepicker__year-select').should('be.visible').select('1994');
cy.get('.react-datepicker__day--009').click();

//AutoComplete
cy.get('.subjects-auto-complete__value-container').should('be.visible').type('computer{enter}');

cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click();
//Upload
cy.get('#uploadPicture').click();
cy.get('input[type="file"]').as('fileInput').attachFile('testeupload.jpg')

cy.get('#currentAddress').should('be.visible').type('Rua Fernando Cunha Lima, 867, Cristo Redentor');
//propaganda
cy.get('[style="text-align:center;display:block;max-width:970px;height:auto;overflow:hidden;margin:auto"] > :nth-child(4)').click();

cy.get('#state > .css-yk16xz-control > .css-1hwfws3').should('be.visible').type('Haryana{enter}');
cy.get('#stateCity-wrapper > :nth-child(3)').should('be.visible').type('Karnal{enter}');
cy.get('#submit').click();
//Propaganda
cy.get('[style="text-align:center;display:block;max-width:970px;height:auto;overflow:hidden;margin:auto"] > :nth-child(4)').click();

cy.get('#closeLargeModal').click();
});