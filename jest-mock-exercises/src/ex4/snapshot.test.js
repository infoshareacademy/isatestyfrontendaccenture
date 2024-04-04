// Napisz test z uzyciem snapshota
import { createDivElement, createStyledParagraphElement } from './snapshot';

describe('createDivElement', () => {
    beforeEach(() => expect.hasAssertions());

    test('should create div element with title inline', () => {
        expect(createDivElement('title')).toMatchInlineSnapshot(`
      <div>
        title
      </div>
    `);
    });

    test('should create div element with title', () => {
        expect(createDivElement('title')).toMatchSnapshot();
    });
});

describe('createStyledParagraphElement', () => {
    beforeEach(() => expect.hasAssertions());

    test('should create p element with title and proper styles inline', () => {
        expect(createStyledParagraphElement('title')).toMatchInlineSnapshot(`
      <p
        style="background-color: red; color: black;"
      >
        title
      </p>
    `);
    });
    test('should create p element with title and proper styles', () => {
        expect(createStyledParagraphElement('title')).toMatchSnapshot();
    });
});
