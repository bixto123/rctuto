import {render, screen} from '@testing-library/react';
import App from './App';

test('Render Bienvenue title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bienvenue/i);
  expect(linkElement).toBeInTheDocument();
});
