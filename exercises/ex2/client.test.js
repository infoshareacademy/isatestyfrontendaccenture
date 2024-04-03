// Uzupełnij testy

describe('getNextOrderNumber', () => {
    test('should return correct first order number', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [],
            type: 'EXTERNAL'
        };

        const expected = 'ISA-#1';

        // act
        const actual = service.getNextOrderNumber(client);

        // assert
        if (actual === expected) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be "${expected}"`
            );
        }
    });

    test('should return correct n-th order number', () => {
        throw ('No test')
    });
});

describe('calculateDiscount', () => {
    test('should return 10% discount if orders exceeded 500', () => {
        throw ('No test')
    });

    test('should return no discount if orders value is less then 500', () => {
        throw ('No test')
    });

    test('should 15% discount if client is internal', () => {
        throw ('No test')
    });

    test('should return 25% discount if client is internal and spent more than 500', () => {
        throw ('No test')
    });
});

describe('getOrderValue', () => {
    test('should return 0 value when orders are empty', () => {
        throw ('No test')
    });

    test('should return correcr value for multiple orders', () => {
        throw ('No test')
    });
});

describe('calculateOrderValueWithDiscount', () => {
    test('should return value decreased by discount', () => {
        throw ('No test');
    });

    test('should return value decreased by discount when client is INTERNAL', () => {
        throw ('No test');
    });

    test('should return value not decreased by discount when order amount is less than 500 and client is not INTERNAL', () => {
        throw ('No test');
    });
});
