/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getPokeList } from '../../api/poke';

const initialState = {
  current: null,
  list: [],
};

const fetchProjects = createAsyncThunk(
  'poke/fetchPokemons',
  async (_payload, _thunkAPI) => {
    const response = await getPokeList();
    return response.data;
  },
);

const pokeSlice = createSlice({
  name: 'poke',
  initialState,
  reducers: {
    setCurrentProject: (state, action) => {
      state.current = action.payload;
    },
  },
  extraReducers: {
    [fetchProjects.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCurrentProject } = pokeSlice.actions;
export const fetchProjectsThunk = fetchProjects;
export const projectReducer = pokeSlice.reducer;
