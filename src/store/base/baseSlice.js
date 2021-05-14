/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import getCharactersList from '../../api/characters';

const initialState = {
  currentList: [],
  pageSize: 0,
  count: 0,
  error: '',
  loading: false,
};

const fetchCharacters = createAsyncThunk('poke/fetchCharacters', async (payload, _thunkAPI) => {
  const response = await getCharactersList(payload);
  return response.data;
});

const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    setCurrentList: (state, action) => {
      state.currentList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.currentList = action.payload.results;
      state.count = action.payload.info.count;
      state.pageSize = action.payload.info.count / action.payload.info.pages;
      state.error = '';
      state.loading = false;
    },
    [fetchCharacters.rejected]: (state) => {
      state.loading = false;
      state.error = 'Hubo un problema recuperando los datos, intenta nuevamente';
    },
    [fetchCharacters.pending]: (state) => {
      state.error = '';
      state.loading = true;
    },
  },
});

export const { setCurrentList, setLoading, setError } = baseSlice.actions;
export const fetchCharactersThunk = fetchCharacters;
export const baseReducer = baseSlice.reducer;
