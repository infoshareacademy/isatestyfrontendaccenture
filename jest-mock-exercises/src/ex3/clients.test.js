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

jest.mock('./clients-data.js', () => ({
    getClients: jest.fn()
}));

jest.mock('./logger', () => ({
    logger: {
        error: jest.fn()
    }
}))

describe('filterClients', () => {
    beforeEach(() => expect.hasAssertions())
    afterEach(() => {
        jest.resetAllMocks()
    })

    test('should filter only INTERNAL clients for INTERNAL type', async () => {
        getClients.mockReturnValue(Promise.resolve(mockClientsResponse));

        const result = await filterClients({ type: 'INTERNAL' });

        expect(result).toEqual([
            { id: 1, name: 'Jan', type: 'INTERNAL', registered: new Date(2019, 4, 12) },
            { id: 2, name: 'Maria', type: 'INTERNAL', registered: new Date(2018, 3, 11) },
            { id: 5, name: 'Janina', type: 'INTERNAL', registered: new Date(2019, 11, 3) },
        ])
    });

    test('should return empty clients when empty list fetched', async () => {
        getClients.mockReturnValue(Promise.resolve([]));

        const result = await filterClients({ type: 'INTERNAL' });

        expect(result).toEqual([])
    });

    test('should return empty list when fetching clients failed', async () => {
        getClients.mockReturnValue(Promise.reject(new Error('błąd')));

        const result = await filterClients({ type: 'INTERNAL' });

        expect(result).toEqual([])
    });

    test('should log error when fetching clients failed', async () => {
        const error = new Error('błąd');
        getClients.mockReturnValue(Promise.reject(error));

        const result = await filterClients({ type: 'INTERNAL' });

        expect(logger.error).toHaveBeenCalledWith('fetching clients failed!', error)
    });

    test('should not log error when fetching clients successful', async () => {
        getClients.mockReturnValue(Promise.resolve(mockClientsResponse));

        const result = await filterClients({ type: 'INTERNAL' });

        expect(logger.error).not.toHaveBeenCalled();
    });
});
