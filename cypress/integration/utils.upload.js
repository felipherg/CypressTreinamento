const SELECTOR = require('./elements').Elements

export function acessarUpload(){
    cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home');
    cy.get(SELECTOR.btn_outros).click();
    cy.get(SELECTOR.btn_uploadarquivo).click();
}

export function realizarUpload(){
    cy.get(SELECTOR.btn_file)
      .selectFile('cypress/fixtures/TestPNG.png')
      .then(input => {
        expect(input[0].files[0].name).to.equal('TestPNG.png')})
}