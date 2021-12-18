import { combineReducers } from 'redux';

import { animeReducer } from './animeReducer';

export const rootReducer = combineReducers({
animeStreaming: animeReducer
});