import { createStore, combineReducers } from 'redux';

import { SecondState, secondReducer } from './second';
import { FirstState, firstReducer } from './first';

export interface RootStore {
    first: FirstState;
    second: SecondState;
}

const rootReducer = combineReducers({
    first: firstReducer,
    second: secondReducer,
});

export const store = createStore(
    rootReducer,
    // @ts-ignore
    window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__'](),
);