//REDUX
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/rootReducer';

//REDUX PERSIST

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';// defaults to localStorage for web


//REDUX PERSIST

const persistConfig = {
    key: 'persist-key',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


//REDUX

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(
        applyMiddleware( thunk )
        )
        );


//REDUX PERSIST
export const persistor = persistStore(store);