import { combineReducers } from 'redux';

import { animeReducer } from './animeReducer';
import { favoriteListReducer } from './favoriteListReducer';

export const rootReducer = combineReducers({
animeStreaming: animeReducer,
favoriteList: favoriteListReducer,
});