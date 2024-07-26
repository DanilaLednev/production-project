import { createAsyncThunk } from '@reduxjs/toolkit';

import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags, getFeatureFlag, setFeatureFlags } from '../lib/setGetFeatures';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface UpdateFeatureFlagOptions {
  userId: string;
  newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlag = createAsyncThunk<
  void,
  UpdateFeatureFlagOptions,
  ThunkConfig<string>
>('user/saveJsonSettings', async ({ userId, newFeatures }, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;

  const allFeatures = {
    ...getAllFeatureFlags(),
    ...newFeatures,
  }

  try {
    await dispatch(
      updateFeatureFlagsMutation({
        userId,
        features: allFeatures
      }),
    );

    // window.location.reload();

    setFeatureFlags(allFeatures)

    return undefined;
  } catch (e) {
    console.log(e);
    return rejectWithValue('');
  }
});
