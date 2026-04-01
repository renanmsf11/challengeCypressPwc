import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const url = 'https://demoqa.com/text-box';



Given('the user visit "DEMOQA" text-box page', () => {
    cy.visit(url);
});
When('the user fill all required field at "DEMOQA" text-box page', () => {
    cy.fixture('demoqaPOM').then((el) => {

        cy.get(el.fullnameField).should('be.visible').type('John Doe');
        cy.get(el.email).should('be.visible').type('johndoe@example.com');
        cy.get(el.currentAddress).should('be.visible').type('123 Main St');
        cy.get(el.permanentAddress).should('be.visible').type('456 Secondary St');


    });
});

When('the user click at the "SubmitButton" at "DEMOQA" text-box page', () => {
    cy.fixture('demoqaPOM').then((el) => {
        cy.get(el.submitButtonTextBoxPage).should('be.visible').click();

    });
});

Then('the user must be able to visualize the output values accordingly to sent form', () => {
    cy.fixture('demoqaPOM').then((el) => {

        cy.get('#output').should('be.visible').within(() => {

            cy.get('#name').should('contain.text', 'John Doe');
            cy.get('#email').should('contain.text', 'johndoe@example.com');
            cy.get('#currentAddress').should('contain.text', '123 Main St');
            cy.get('#permanentAddress').should('contain.text', '456 Secondary St');

        });

    });
});

