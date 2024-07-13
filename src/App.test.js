import { render, screen } from '@testing-library/react';
import App from './App';

test('renders age calculator title', () => {
  render(<App />);
  const titleElement = screen.getByText(/age calculator/i);
  expect(titleElement).toBeInTheDocument();
});
