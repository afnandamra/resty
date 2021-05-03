import { render, screen, fireEvent , waitFor} from '@testing-library/react';
import App from './App';

test('renders header', async() => {
  render(<App />);
  const linkElement = screen.getByText(/RESTy/i);
  expect(linkElement).toBeInTheDocument();
  let button = screen.getByText('GO!');
    expect(button).toBeInTheDocument();
    fireEvent.submit(button, {
      target: {
        url: { value: 'https://pokeapi.co/api/v2/pokemon' },
        method: 'GET',
      },
    });
    let history = await waitFor(() => screen.getByTestId('url'));
    let result = await waitFor(() => screen.getByTestId('resultSec'));
    expect(history).toBeInTheDocument();
    expect(history).toContainHTML(' <tr data-testid="url"><td/><td/></tr>');
    expect(result).toBeInTheDocument();

});
