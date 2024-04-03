//  Uzupełnij pozostałe testy


describe('add', () => {
    test('should return positive value if both numbers are positive', () => {
        const actual = add(1, 2);

        if (actual === 3) {
            return;
        } else {
            throw new Error('Assertion failed!, Should be 3');
        }
    });

    test('should return negative value if both numbers are negative', () => {
        throw ('No test')
    });
});


describe('factorial', () => {
    test('should return 6 when arguemnt is 3', () => {
        throw ('No test')
    });

    test('should return 1 when arguemnt is 1', () => {
        throw ('No test')
    });

    test('should return 1 when arguemnt is 0', () => {
        throw ('No test')
    });
});

describe('divide', () => {
    test('should return error when second value is 0', () => {
        throw ('No test')
    });

    test('should return correct value when both numbers are positive', () => {
        throw ('No test')
    });
});
