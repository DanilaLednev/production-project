import { getLoginUsername } from './getLoginUsername';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginUsername.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'someone',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('someone');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
