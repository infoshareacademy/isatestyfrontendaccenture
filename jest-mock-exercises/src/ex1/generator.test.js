// Zrób mock funckji getRandomNumber by zawsze zwracał taka wartość jaką potrzebuijesz i napisz testy.
import { generateId } from './generator';

jest.mock('./math', () => ({
    getRandomNumber: () => 50
}))

describe('generateId', () => {
    beforeEach(() => expect.hasAssertions())

    test('should generate id with given seed', () => {
        expect(generateId('accenture')).toBe('id_accenture-50')
    });

    test('should generate id with given empty seed', () => {
        expect(generateId('')).toBe('id_-50');
    });
});