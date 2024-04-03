import { getRandomNumber } from './math';

export const generateId = seed => {
    return `id_${seed}-${getRandomNumber()}`;
};
