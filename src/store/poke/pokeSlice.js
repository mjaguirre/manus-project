/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getPokeList, getPokeDetails } from '../../api/poke';

const initialState = {
  detailedList: [],
  currentList: [],
  error: '',
  loading: false,
};

const fetchPokemons = createAsyncThunk('poke/fetchPokemons', async (_payload, _thunkAPI) => {
  const response = await getPokeList();
  return response.data;
});

const fetchPokemonDetails = createAsyncThunk(
  'poke/fetchPokemonDetails',
  async (payload, _thunkAPI) => {
    const response = await getPokeDetails(payload);
    return response.data;
  }
);

const pokeSlice = createSlice({
  name: 'poke',
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
    [fetchPokemons.fulfilled]: (state, action) => {
      state.error = '';
      state.list = [];
      state.list = action.payload.results;
    },
    [fetchPokemons.rejected]: (state) => {
      state.loading = false;
      state.error = 'Hubo un problema recuperando los datos, intenta nuevamente';
    },
    [fetchPokemons.loading]: (state) => {
      state.error = '';
      state.loading = true;
    },
    [fetchPokemonDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.detailedList += action.payload;
    },
    [fetchPokemonDetails.rejected]: (state) => {
      state.loading = false;
      state.error = 'Hubo un problema recuperando los datos, intenta nuevamente';
    },
  },
});

export const { setCurrentList, setLoading, setError } = pokeSlice.actions;
export const fetchProjectsThunk = fetchPokemons;
export const fetchDetailsThunk = fetchPokemonDetails;
export const pokeReducer = pokeSlice.reducer;
