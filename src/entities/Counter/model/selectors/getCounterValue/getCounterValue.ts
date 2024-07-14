import { createSelector } from '@reduxjs/toolkit';

import { CounterSchema } from '@/entities/Counter';
import { getCounter } from '@/entities/Counter/model/selectors/getCounter/getCounter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value,
);

// export const [useCounterValue, getCounterValue] = buildSelector(
//   (state) => state.counter.value,
// );
