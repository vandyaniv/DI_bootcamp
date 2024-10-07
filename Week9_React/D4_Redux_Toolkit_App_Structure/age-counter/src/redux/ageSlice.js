import { createAsyncThunk } from '@reduxjs/toolkit';

export const ageUpAsync = createAsyncThunk(
  'age',

  async (amount, { dispatch }) => {
    await new promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  },
);
