// Napisz testy dla filterClients i getLatestRegisteredClient

import { filterClients, getLatestRegisteredClient } from './clients';
import { clients } from './clients-data';

describe('filterClients', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should filter INTERNAL clients', () => {
        const actual = filterClients(clients, { type: 'INTERNAL' });

        expect(actual).toHaveLength(3);
    });

    test('should filter EXTERNAL clients', () => {
        const actual = filterClients(clients, { type: 'EXTERNAL' });

        expect(actual).toHaveLength(2);
    });

    test('should not filter when filter type is unknown', () => {
        const actual = filterClients(clients, { type: 'UNKNOWN' });

        expect(actual).toHaveLength(5);
    });
});

describe('getLatestRegisteredClient', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should return client with latest registered date', () => {
        const actual = getLatestRegisteredClient(clients);

        expect(actual.name).toBe('Andrzej')
    });

    test('should return first client when there are two clients with the same date', () => {
        const actual = getLatestRegisteredClient([
            { id: 6, name: 'Kunegunda', type: 'INTERNAL', registered: new Date(2020, 10, 9) },
            ...clients
        ]);

        expect(actual.name).toBe('Kunegunda')
    });
});