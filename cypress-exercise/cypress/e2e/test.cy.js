/// <reference types="Cypress" />

// przykladowy test
describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io');

        cy.pause();

        cy.contains('type').click();

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions');

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
    });
});

// Postaw aplikacje w trybie deweloperskim i napisz testy.

describe('Classic todo e2e tests', () => {
    it('should add new todo item', () => {
        cy.visit('http://localhost:3000/');

        cy.get('input').type('new task{enter}');

        cy.contains('new task').should('exist')
    });

    it('if there is no todo item then it should show nothing to do', () => {

    });

    it('should remove todo item', () => {

    });

    it('should open done task panel when click show done', () => {

    });

    it('should hide done task panel when click hide done', () => {

    });

    it('should mark todo item as done', () => {

    });

    it('should unmark todo item as done', () => {

    });

    it('should remove todo item from done panel', () => {

    });

    // dopisz pozostałe
});