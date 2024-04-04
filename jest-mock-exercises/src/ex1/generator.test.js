// Zrób mock funckji getRandomNumber by zawsze zwracał taka wartość jaką potrzebuijesz i napisz testy.
import { generateId } from './generator';
import { getRandomNumber } from './math';

jest.mock('./math', () => ({
    getRandomNumber: jest.fn()
}))

describe('generateId', () => {
    beforeEach(() => {
        expect.hasAssertions();
        getRandomNumber.mockReturnValue(50);
    })

    test('should generate id with given seed', () => {
        expect(generateId('accenture')).toBe('id_accenture-50')
    });

    test('should generate id with given empty seed', () => {
        getRandomNumber.mockReturnValue(100);
        expect(generateId('')).toBe('id_-100');
    });
});