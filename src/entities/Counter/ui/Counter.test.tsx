import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './Counter';

import { componentRender } from '@/shared/lib/tests/componentRender/conponentRender';

describe('Counter', () => {
  test('with only first param', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
