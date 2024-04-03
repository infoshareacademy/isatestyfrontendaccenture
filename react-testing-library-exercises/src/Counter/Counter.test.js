// Napisz podane testy!
import { Counter } from './Counter';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
    beforeEach(() => expect.hasAssertions());

    test('should have initial counter set to 0', () => {
        render(<Counter />);

        expect(screen.getByText('0')).toBeInTheDocument();
    });

    test('should have increase counter when increase clicked', async () => {
        render(<Counter />);

        await userEvent.click(screen.getByRole('button', { name: 'increase' }))

        expect(screen.getByText('1')).toBeInTheDocument();
    });

    test('should have decrease counter when decrease clicked', () => {

    });

    test('should have reset counter when reset clicked', () => {

    });
});
