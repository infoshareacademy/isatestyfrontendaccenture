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

const pageTodoList = {
    prepareTest: () => {
        cy.visit('http://localhost:3000/');
        cy.get('form input').as('input')
    },
    addTodoTask: (taskName) => {
        cy.get('@input').type(`${taskName}{enter}`);
    },
    getRemoveButtonByTaskName: (taskName) => {
        return cy.get('ul li').contains(taskName).parent().find('button')
    },
    getCheckboxByTaskName: (taskName) => {
        return cy.contains(`${taskName}`).parent().find('input[type=checkbox]')
    },
    clickShowDone: () => {
        cy.get('button').contains('Show done').click();
    },
    clickHideDone: () => {
        cy.get('button').contains('Hide done').click();
    }
}

describe('Classic todo e2e tests', () => {
    beforeEach(() => {
        pageTodoList.prepareTest();
    })

    it('should add new todo item', function () {
        const newTask = 'new task';
        pageTodoList.addTodoTask(newTask);

        cy.contains(newTask).should('exist');
    });

    it('if there is no todo item then it should show nothing to do', () => {
        cy.contains('Nothing todo!').should('exist')
    });

    it('should remove todo item', function () {
        const newTask = 'new task';
        pageTodoList.addTodoTask(newTask);

        // OPCJA 1
        // cy.contains('🗑').click();

        // OPCJA 2
        // cy.get('ul li').first().find('button').click();

        // OPCJA 3
        // cy.get('ul li:first-child button').click();

        // OPCJA 4
        pageTodoList.getRemoveButtonByTaskName(newTask).click();

        cy.contains('new task').should('not.exist');
    });

    it('should open done task panel when click show done', () => {
        pageTodoList.clickShowDone();

        cy.get('h2').contains('Done').should('exist');
    });

    it('should hide done task panel when click hide done', () => {
        pageTodoList.clickShowDone();

        cy.get('h2').contains('Done').should('exist');

        pageTodoList.clickHideDone();

        cy.contains('Done').should('not.exist');
    });

    it('should mark todo item as done', () => {
        const newTask = 'new task';
        pageTodoList.addTodoTask(newTask);

        cy.contains(newTask).should('exist');

        pageTodoList.getCheckboxByTaskName(newTask).click();

        cy.contains(newTask).should('not.exist');

        pageTodoList.clickShowDone()

        cy.contains(newTask).should('exist');
        pageTodoList.getCheckboxByTaskName(newTask).should('be.checked')
    });

    it('should unmark todo item as done', () => {
        const newTask = 'new task';
        pageTodoList.addTodoTask(newTask);

        cy.contains(newTask).should('exist');

        pageTodoList.getCheckboxByTaskName(newTask).click();

        cy.contains('new task').should('not.exist');

        pageTodoList.clickShowDone();

        cy.contains('new task').should('exist');


        pageTodoList.getCheckboxByTaskName(newTask).should('be.checked').click();
        pageTodoList.getCheckboxByTaskName(newTask).should('be.not.checked');
    });

    it('should remove todo item from done panel', () => {
        const newTask = 'new task';
        pageTodoList.addTodoTask(newTask);

        pageTodoList.getCheckboxByTaskName(newTask).click();
        pageTodoList.clickShowDone();

        pageTodoList.getRemoveButtonByTaskName(newTask).click();

        cy.contains('new task').should('not.exist')
    });

    // dopisz pozostałe
});