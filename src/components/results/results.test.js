import { render, screen } from '@testing-library/react';
import Results from './results';

describe('Results test', () => {
  test('onSubmit event fired', () => {
    let state = {
      headers: { 'content-type': 'application/json' },
      response: {
        name: 'bulbasaur',
        weight: '69',
      },
    };
    render(<Results props={state} />);
    let result =  screen.getByTestId('resultSec');
    expect(result).toBeInTheDocument();
  });
});
