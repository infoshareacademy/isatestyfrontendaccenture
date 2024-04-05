// Napisz podane testy!
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextTransformer } from './TextTransformer';

describe('TextTransformer', () => {
    beforeEach(() => expect.hasAssertions());

    test('should transform inserted text', () => {
        render(<TextTransformer />);

        const inputElement = screen.getByLabelText('Insert text');
        const typeInInput = () => userEvent.type(inputElement, 'accenture')

        act(() => {
            typeInInput();
        })

        expect(screen.getByText('__ACCENTURE__')).toBeInTheDocument();
    });

    test('should not override inserted text when prop has been set later', () => {
        const { rerender } = render(<TextTransformer />);

        const inputElement = screen.getByLabelText('Insert text');
        const typeInInput = () => userEvent.type(inputElement, 'accenture')

        act(() => {
            typeInInput();
        })

        rerender(<TextTransformer text="InfoshareAcademy" />)

        expect(screen.getByText('__ACCENTURE__')).toBeInTheDocument();
    });

    test('should transform text from props when prop has been set', () => {
        render(<TextTransformer text="InfoshareAcademy" />);

        expect(screen.getByText('__INFOSHAREACADEMY__')).toBeInTheDocument();
    });

    test('should not show transformed text when state is empty', () => {
        render(<TextTransformer />);

        expect(screen.queryByText('Inserted text:')).not.toBeInTheDocument();
    })
});
