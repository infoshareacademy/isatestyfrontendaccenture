// Napisz testy dla 

import { getValueAsPromise, rejectValueAsPromise, isValueValued } from './async';

describe('getValueAsPromise', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should resolve with given value', () => {
        expect(getValueAsPromise(5)).resolves.toBe(5);
    });
});

describe('rejectValueAsPromise', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should reject with given value', () => {

    });
});

describe('isValueValued', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should return true if value is valid', () => {

    });

    test('should return false if value is not valid', () => {

    });
});
