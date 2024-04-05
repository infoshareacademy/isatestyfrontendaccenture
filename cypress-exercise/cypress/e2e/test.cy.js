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
        cy.get('form input').as('input')
    })

    it('should add new todo item', function () {
        cy.get('@input').type('new task{enter}');

        cy.contains('new task').should('exist');
    });

    it('if there is no todo item then it should show nothing to do', () => {
        cy.contains('Nothing todo!').should('exist')
    });

    it('should remove todo item', function () {
        cy.get('@input').type('new task{enter}');

        // OPCJA 1
        // cy.contains('🗑').click();

        // OPCJA 2
        cy.get('ul li').first().find('button').click();

        // OPCJA 3
        // cy.get('ul li:first-child button').click();

        cy.contains('new task').should('not.exist');
    });

    it('should open done task panel when click show done', () => {
        cy.get('button').contains('Show done').click();

        cy.get('h2').contains('Done').should('exist');
    });

    it('should hide done task panel when click hide done', () => {
        cy.get('button').contains('Show done').click();

        cy.get('h2').contains('Done').should('exist');

        cy.get('button').contains('Hide done').click();

        cy.contains('Done').should('not.exist');
    });

    it('should mark todo item as done', () => {
        cy.get('@input').type('new task{enter}');

        cy.contains('new task').should('exist');

        cy.contains('new task').parent().find('input[type=checkbox]').click();

        cy.contains('new task').should('not.exist');

        cy.get('button').contains('Show done').click();

        cy.contains('new task').should('exist');
        cy.contains('new task').parent().find('input[type=checkbox]').should('be.checked')
    });

    it('should unmark todo item as done', () => {
        cy.get('@input').type('new task{enter}');

        cy.contains('new task').should('exist');
        cy.contains('new task').parent().find('input[type=checkbox]').as('checkbox');

        cy.get('@checkbox').click();

        cy.contains('new task').should('not.exist');

        cy.get('button').contains('Show done').click();

        cy.contains('new task').should('exist');


        cy.get('@checkbox').should('be.checked');
        cy.get('@checkbox').click();

        cy.get('@checkbox').should('be.not.checked');
    });

    it('should remove todo item from done panel', () => {
        cy.get('@input').type('new task{enter}');
        cy.contains('new task').parent().find('input[type=checkbox]').click();
        cy.get('button').contains('Show done').click();

        cy.contains('new task').should('exist').parent().find('button').click();

        cy.contains('new task').should('not.exist')
    });

    // dopisz pozostałe
});