// Zammockuj getClients i logger i napisz testy!

import { filterClients, getLatestRegisteredClient } from './clients';
import { getClients } from './clients-data';
import { logger } from './logger';

const mockClientsResponse = [
    { id: 1, name: 'Jan', type: 'INTERNAL', registered: new Date(2019, 4, 12) },
    { id: 2, name: 'Maria', type: 'INTERNAL', registered: new Date(2018, 3, 11) },
    { id: 3, name: 'Anna', type: 'EXTERNAL', registered: new Date(2017, 2, 10) },
    { id: 4, name: 'Andrzej', type: 'EXTERNAL', registered: new Date(2020, 10, 9) },
    { id: 5, name: 'Janina', type: 'INTERNAL', registered: new Date(2019, 11, 3) },
];

describe('filterClients', () => {
    beforeEach(() => expect.hasAssertions())

    test('should filter only INTERNAL clients for INTERNAL type', async () => {

    });

    test('should return empty clients when empty list fetched', async () => {

    });

    test('should return empty list when fetching clients failed', async () => {

    });

    test('should log error when fetching clients failed', async () => {

    });

    test('should not log error when fetching clients successful', async () => {

    });
});
