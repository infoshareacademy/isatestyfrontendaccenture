import { factorial, add, divide } from './math';

//  Uzupełnij pozostałe testy

describe('add', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should return positive value if both numbers are positive', () => {
        const actual = add(1, 2);

        expect(actual).toBe(3)
    });

    test('should return negative value if both numbers are negative', () => {
        const actual = add(-5, -2);

        expect(actual).toBe(-7)
    });
});


describe('factorial', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should return 6 when arguemnt is 3', () => {
        const actual = factorial(3);

        expect(actual).toBe(6);
    });

    test('should return 1 when arguemnt is 1', () => {
        const actual = factorial(1);

        expect(actual).toBe(1);
    });

    test('should return 1 when arguemnt is 0', () => {
        const actual = factorial(0);

        expect(actual).toBe(1);
    });
});

describe('divide', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should return error when second value is 0', () => {
        expect(() => divide(2, 0)).toThrow();
    });

    test('should return correct value when both numbers are positive', () => {
        expect(divide(2, 1)).toBe(2)
    });
});


// Wykonanie testów dla wielu scenariusz
describe('factorial - many scenarios', () => {
    // OPCJA 1
    const testCases = [
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120],
        [6, 720],
    ];

    test.each(testCases)(
        'for factorial from %i, should return %i',
        (value, expected) => {
            expect(factorial(value)).toBe(expected);
        }
    );

    // OPCJA 2
    [
        {
            value: 1,
            expected: 1,
        },
        {
            value: 2,
            expected: 2,
        },
        {
            value: 3,
            expected: 6,
        },
        {
            value: 4,
            expected: 24,
        },
        {
            value: 5,
            expected: 120,
        },
    ].forEach(({ value, expected }) => {
        test(`should return ${expected} for factorial from ${value}`, () => {
            expect(factorial(value)).toBe(expected);
        });
    });
});
