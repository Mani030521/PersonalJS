/* eslint-disable max-len */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import initialState from '../State';
import apiHelper from '../../Helpers/APIHelper.js';

export const trainAPIs = createAsyncThunk(
  'train/getTrains',
  async ({ payload, api }) => {
    const responseUserData = await apiHelper('GET', api, payload);
    return responseUserData && responseUserData.data;
  }
);

const userSlice = createSlice({
  name: 'train',
  initialState: initialState.trainDetails,
  reducers: {
    searchTrain: (state, { payload }) => {
      const { event, trainData } = payload;
      const shallowCopyOriginal = JSON.parse(
        JSON.stringify(state.trainDuplicateData)
      );
      if (event === '') {
        return {
          ...state,
          noTrain: false,
          trainDuplicateData: trainData,
        };
      }
      const resultArray = shallowCopyOriginal.filter((copiedData) => copiedData.Train_Name.toLowerCase().includes(event));
      return {
        ...state,
        noTrain: resultArray.length === 0,
        trainDuplicateData: resultArray
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(trainAPIs.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(trainAPIs.rejected, (state) => {
      state.isRejected = true;
      state.isPending = false;
    });
    builder.addCase(trainAPIs.fulfilled, (state, { payload }) => {
      state.isPending = false;
      state.isFetched = true;
      state.trainData = payload;
      state.trainDuplicateData = payload;
    });
  },
});

const { actions, reducer } = userSlice;

export const { searchTrain } = actions;
export default reducer;
