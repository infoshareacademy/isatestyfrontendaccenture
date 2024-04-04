// Napisz testy dla 

import { getValueAsPromise, rejectValueAsPromise, isValueValid } from './async';

describe('getValueAsPromise', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should resolve with given value', () => {
        expect(getValueAsPromise(5)).resolves.toBe(5);
    });

    test('should resolve with given value option 2', async () => {
        const actual = await getValueAsPromise(5);
        expect(actual).toBe(5);
    });

    test('should resolve with given value option 3', () => {
        getValueAsPromise(5).then((actual) => {
            expect(actual).toBe(5);
        })
    });
});

describe('rejectValueAsPromise', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should reject with given value', () => {
        expect(rejectValueAsPromise(5)).rejects.toBe(5);
    });

    test('should reject with given value option 2', async () => {
        try {
            await rejectValueAsPromise(5);
        } catch (err) {
            expect(err).toBe(5);
        }
    });

    test('should reject with given value option 3', () => {
        rejectValueAsPromise(5).catch((err) => {
            expect(err).toBe(5);
        })
    });
});

describe('isValueValid', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should return true if value is valid', async () => {
        const actual = await isValueValid(11);

        expect(actual).toBeTruthy();
    });

    test('should return false if value is not valid', async () => {
        const actual = await isValueValid(5);

        expect(actual).toBeFalsy();
    });
});
