import { combineReducers } from 'redux';
import { DECREMENT, INCREMENT, CHANGE_THEME, LOADING } from './types';

function counterReducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT: return state + 1;
        case DECREMENT: return state - 1;
        default: return state;
    }
}

const initialThemeState = {
    value: 'light'
}

function loadingReducer(state = false, action) {
    switch (action.type) {
        case LOADING: return action.payload;
        default: return state;
    }
}

function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, value: action.payload };
        default: return state;
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    loading: loadingReducer
});