/// <reference types="Cypress" />

// przykladowy test
describe.skip('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io');

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
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('should add new todo item', () => {
        cy.get('input').type('new task{enter}');

        cy.contains('new task').should('exist');
    });

    it('if there is no todo item then it should show nothing to do', () => {
        cy.contains('Nothing todo!').should('exist')
    });

    it('should remove todo item', () => {
        cy.get('input').type('new task{enter}');

        // OPCJA 1
        // cy.contains('🗑').click();

        // OPCJA 2
        cy.get('ul li').first().find('button').click();

        // OPCJA 3
        // cy.get('ul li:first-child button').click();

        cy.contains('new task').should('not.exist');
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