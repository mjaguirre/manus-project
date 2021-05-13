import { combineReducers } from 'redux';

import { pokeReducer } from './poke/pokeSlice';

const rootReducer = combineReducers({
  poke: pokeReducer,
});

export default rootReducer;
