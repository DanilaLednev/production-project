import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
  LOCAL_STORAGE_LAST_DESIGN_KEY,
  USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue('');
    }

    getUserDataByIdQuery(JSON.parse(userId));

    try {
      const response = await dispatch(
        getUserDataByIdQuery(JSON.parse(userId)),
      ).unwrap();

      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        response.features?.isAppRedesigned ? 'new' : 'old',
      );

      return response;
    } catch (e) {
      console.log(e);
      return rejectWithValue('');
    }
  },
);
