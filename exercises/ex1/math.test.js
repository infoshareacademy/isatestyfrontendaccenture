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
        const actual = add(-1, -3);

        if (actual === -4) {
            return;
        } else {
            throw new Error('It should be -4')
        }
    });
});


describe('factorial', () => {
    test('should return 6 when arguemnt is 3', () => {
        const actual = factorial(3);

        if (actual === 6) {
            return;
        } else {
            throw new Error('It should be 6')
        }
    });

    test('should return 1 when arguemnt is 1', () => {
        const actual = factorial(1);

        if (actual === 1) {
            return;
        } else {
            throw new Error('It should be 6')
        }
    });

    test('should return 1 when arguemnt is 0', () => {
        const actual = factorial(0);

        if (actual === 1) {
            return;
        } else {
            throw new Error('It should be 6')
        }
    });
});

describe('divide', () => {
    test('should return error when second value is 0', () => {
        try {
            divide(2, 0);
            throw new Error('It should return error')
        } catch (err) {
            if (err.message === 'Second numbers have to be positive.') {
                return;
            } else {
                throw new Error('It should return error')
            }
        }
    });

    test('should return correct value when both numbers are positive', () => {
        const actual = divide(6, 3);

        if (actual === 2) {
            return;
        } else {
            throw new Error('It should be 2')
        }
    });
});
