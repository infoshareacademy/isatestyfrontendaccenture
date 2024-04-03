import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
    render(<App />);
    const title = screen.getByText(/react-testing-library-exercises/i);
    expect(title).toBeInTheDocument();
});
