import { LoginSchema } from '../types/LoginSchema';

import { loginActions, loginReducer } from './LoginSlice';

describe('LoginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'someone' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('someone'),
    ))
      .toEqual({ username: 'someone' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123321' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUserPassword('123321'),
    ))
      .toEqual({ password: '123321' });
  });
});
