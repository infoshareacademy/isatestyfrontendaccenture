// Napisz podane testy!
import { Counter } from './Counter';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
    beforeEach(() => expect.hasAssertions());

    test('should have initial counter set to 0', () => {
        render(<Counter />);

        expect(screen.getByText('0')).toBeInTheDocument();
    });

    test('should have increase counter when increase clicked', async () => {
        render(<Counter />);

        const increaseButton = screen.getByRole('button', { name: 'increase' })

        await act(async () => {
            await userEvent.click(increaseButton)
        })

        expect(screen.getByText('1')).toBeInTheDocument();
    });

    test('should have decrease counter when decrease clicked', async () => {
        render(<Counter />);

        const decreaseButton = screen.getByRole('button', { name: 'decrease' })

        await act(async () => {
            await userEvent.click(decreaseButton);
        })

        expect(screen.getByText('-1')).toBeInTheDocument();
    });

    test('should have reset counter when reset clicked', async () => {
        render(<Counter />);

        const decreaseButton = screen.getByRole('button', { name: 'decrease' })
        const resetButton = screen.getByRole('button', { name: 'reset' })

        await act(async () => {
            await userEvent.click(decreaseButton);
        })

        expect(screen.getByText('-1')).toBeInTheDocument();

        await act(async () => {
            await userEvent.click(resetButton);
        })

        expect(screen.getByText('0')).toBeInTheDocument();

    });
});
