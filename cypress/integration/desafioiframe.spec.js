/// <reference types="cypress" />

it('Iframe',()=>{
    cy.visit('https://automacaocombatista.herokuapp.com/mudancadefoco/iframe');

    //cy.frameLoaded('#id_do_iframe')
    cy.iframe('[src=id_do_iframe]')
    .find('input[class="collapsible-header "]')
    .should('be.visible')
    .click();

    });