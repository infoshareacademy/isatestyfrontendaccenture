import { getClients } from './clients-data';
import { logger } from './logger';

export const filterClients = async (filter) => {
    try {
        const clients = await getClients();

        switch (filter.type) {
            case 'INTERNAL':
                return clients.filter((client) => client.type === 'INTERNAL');
            case 'EXTERNAL':
                return clients.filter((client) => client.type === 'EXTERNAL');
            default:
                return clients;
        }
    } catch (error) {
        logger.error('fetching clients failed!', error);
        return [];
    }
};