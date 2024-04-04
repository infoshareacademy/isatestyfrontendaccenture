// Uzupełnij testy

import { validateStudent } from './student';

const createStudent = (name) => ({
    name
})

describe('validateStudent', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should be valid, when name contains only letters', () => {
        expect(validateStudent(createStudent('Onlyletters'))).toBeTruthy();
    });

    test('should be valid, when name is Marcin', () => {
        expect(validateStudent(createStudent('Marcin'))).toBeTruthy();
    });

    test('should be invalid, when name contains spaces', () => {
        expect(validateStudent(createStudent('M a r c i n'))).toBeFalsy();
    });

    test('should be invalid, when name contains numbers', () => {
        expect(validateStudent(createStudent('Marcin96'))).toBeFalsy();
    });

    test('should invalid, when name is written with big letters', () => {
        expect(validateStudent(createStudent('MARCIN'))).toBeFalsy();
    });
});
