// Napisz podane testy! Pamiętaj by zamokować zapytanie do bazy danych.
import { Burgers } from './Burgers';
import { getBurgers } from './getBurgers';
import { render, screen, act } from '@testing-library/react';

jest.mock('./getBurgers.js', () => ({
    getBurgers: jest.fn()
}))

describe('Burgers', () => {
    beforeEach(() => expect.hasAssertions());

    test('should render fetched burgers', async () => {
        getBurgers.mockReturnValue(Promise.resolve([
            { id: 1, name: 'kanapka z wołowiną' },
            { id: 2, name: 'bułka z frytki' },
        ]))

        render(<Burgers />)

        const burgerName1 = await screen.findByText('kanapka z wołowiną');
        const burgerName2 = await screen.findByText('bułka z frytki');

        expect(burgerName1).toBeInTheDocument();
        expect(burgerName2).toBeInTheDocument();
    });

    test('should show error panel if error occurred', async () => {
        getBurgers.mockReturnValue(Promise.reject(Error('Mak Kwak is closed :(')))

        render(<Burgers />)

        const errorPanel = await screen.findByText('There was an error!');

        expect(errorPanel).toBeInTheDocument();
    });
});
