import { fireEvent, waitFor, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Form from './form';

describe('Form test', () => {
  test('onSubmit event fired', async () => {
    let handler = jest.fn();
    render(<Form prompt="GO!" handler={handler} />);
    // let input = screen.queryByPlaceholderText('http://api.url.here');
    // let method = screen.getByText('GET');
    // userEvent.type(input, 'https://swapi.dev/api/people/');
    // fireEvent.click(method);
    // fireEvent.click(button);
    // expect(input).toHaveValue('input');
    let button = screen.getByText('GO!');
    expect(button).toBeInTheDocument();
    fireEvent.submit(button, {
      target: {
        url: { value: 'https://swapi.dev/api/people/' },
        method: 'GET',
      },
    });
    await waitFor(() => expect(handler).toHaveBeenCalled());
  });
});
