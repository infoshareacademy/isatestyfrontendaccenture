// Napisz podane testy!
import { render, screen } from '@testing-library/react';
import { Wrapper } from './Wrapper';


describe('Wrapper', () => {
    beforeEach(() => expect.hasAssertions());

    test('should create div with correct styles', () => {
        const { container } = render(<Wrapper />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('should show passed children', () => {
        const Child = () => <div>Child</div>;
        render(
            <Wrapper>
                <Child />
            </Wrapper>
        );

        expect(screen.getByText('Child')).toBeInTheDocument();
    });
});
