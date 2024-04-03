// Napisz test z uzyciem snapshota
import { createDivElement, createStyledParagraphElement } from './snapshot';

describe('createDivElement', () => {
    beforeEach(() => expect.hasAssertions());

    test('should create div element with title', () => {
        expect(createDivElement('title')).toMatchInlineSnapshot(`
            <div>
                title
            </div>
        `);
    });
});


describe('createStyledParagraphElement', () => {
    beforeEach(() => expect.hasAssertions());

    test('should create p] element with title and proper styles', () => {

    });
});
