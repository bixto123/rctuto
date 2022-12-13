import {render, screen} from '@testing-library/react';
import App from './App';

test('Render <WelcomeDialog />', () => {
  render(<App />);
  const linkElement = screen.getByText(/Merci de visiter notre vaisseau spatial !/i);
  expect(linkElement).toBeInTheDocument();
});
