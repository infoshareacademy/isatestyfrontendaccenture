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
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 200, 300],
            type: 'EXTERNAL'
        };

        const expected = 'ISA-#4';

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
});

describe('calculateDiscount', () => {
    test('should return 10% discount if orders exceeded 500', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 200, 300],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === 0.1) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be 0.1`
            );
        }
    });

    test('should return no discount if orders value is less then 500', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 200],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === 0) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be 0`
            );
        }
    });

    test('should 15% discount if client is internal', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 200],
            type: 'INTERNAL'
        };

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === 0.15) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be 0.15`
            );
        }
    });

    test('should return 25% discount if client is internal and spent more than 500', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 200, 500],
            type: 'INTERNAL'
        };

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === 0.25) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be 0.25`
            );
        }
    });
});

describe('getOrderValue', () => {
    test('should return 0 value when orders are empty', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.getOrderValue(client);

        // assert
        if (actual === 0) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be 0`
            );
        }
    });

    test('should return correcr value for multiple orders', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 400, 125],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.getOrderValue(client);

        // assert
        if (actual === 625) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be 625`
            );
        }
    });
});

describe('calculateOrderValueWithDiscount', () => {
    test('should return value decreased by discount', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 400, 100],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.calculateOrderValueWithDiscount(client);

        // assert
        if (actual === 540) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be 540`
            );
        }
    });

    test('should return value decreased by discount when client is INTERNAL', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 400, 100],
            type: 'INTERNAL'
        };

        // act
        const actual = service.calculateOrderValueWithDiscount(client);

        // assert
        if (actual === 450) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be 450`
            );
        }
    });

    test('should return value not decreased by discount when order amount is less than 500 and client is not INTERNAL', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 300],
            type: 'EXTERNAL'
        };

        // act
        const actual = service.calculateOrderValueWithDiscount(client);

        // assert
        if (actual === 400) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be 400`
            );
        }
    });
});
