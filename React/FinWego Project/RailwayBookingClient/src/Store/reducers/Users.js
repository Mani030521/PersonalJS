/* eslint-disable consistent-return */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import initialState from '../State';
import apiHelper from '../../Helpers/APIHelper.js';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ payload, api }) => {
    let responseUserData;
    try {
      responseUserData = await apiHelper('POST', api, payload);
      return responseUserData && responseUserData.data;
    } catch (error) {
      if (error.response) {
        throw Error(
          error.response.data && error.response.data.message
            ? error.response.data.message
            : error.response.data.error
        );
      }
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: initialState.loginDetails,
  reducers: {
    setLogOut: (state) => ({
      ...state,
      isUserLoggedIn: false,
      isAdmin: false,
    }),
    fetchLocalStorageDetails: (state) => {
      const isAdminLocal = localStorage.getItem('isAdminLoggedIn');
      const isUserLocal = localStorage.getItem('isUserLoggedIn');
      const userName = localStorage.getItem('userName');

      if (isAdminLocal) {
        return {
          ...state,
          isAdmin: true,
          currentUserDetails: { userName },
        };
      }
      if (isUserLocal) {
        return {
          ...state,
          isUserLoggedIn: true,
          currentUserDetails: { userName },
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isPending = true;
      state.isFetched = false;
      state.isRejected = false;
    });
    builder.addCase(loginUser.rejected, (state, payload) => {
      const { error } = payload;
      state.isRejected = true;
      state.errorText = error.message ? error.message : 'Error';
      state.isPending = false;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isPending = false;
      if (payload.userData) {
        state.loginData = payload.userData;
        state.isUserLoggedIn = true;
        state.currentUserDetails.userName = payload.userData.userName;
        state.errorText = 'Success';
        if (typeof document !== 'undefined') {
          if (payload.token) {
            document.cookie = `access-token=${payload.token}`;
          }
          localStorage.setItem('isUserLoggedIn', state.isUserLoggedIn);
          localStorage.setItem('userName', payload.userData.userName);
        }
      } else {
        state.isAdmin = true;
        state.currentUserDetails.userName = payload.userName;
        if (typeof document !== 'undefined') {
          if (payload.token) {
            document.cookie = `access-token=${payload.token}`;
          }
          localStorage.setItem('isAdminLoggedIn', state.isAdmin);
          localStorage.setItem('userName', payload.userName);
        }
      }
      state.logoutFlag = false;
      state.isFetched = true;
      state.isRejected = false;
      state.token = payload.token;
    });
  },
});

const { actions, reducer } = userSlice;

export const { setLogOut, fetchLocalStorageDetails } = actions;

export default reducer;
