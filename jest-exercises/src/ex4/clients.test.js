// Napisz testy dla filterClients i getLatestRegisteredClient

import { filterClients, getLatestRegisteredClient } from './clients';
import { clients } from './clients-data';

describe('filterClients', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should filter INTERNAL clients', () => {

    });

    test('should filter EXTERNAL clients', () => {

    });

    test('should not filter when filter type is unknown', () => {

    });
});

describe('getLatestRegisteredClient', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should return client with latest registered date', () => {

    });

    test('should return first client when there are two clients with the same date', () => {

    });
});