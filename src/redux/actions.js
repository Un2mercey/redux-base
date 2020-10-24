import { CHANGE_THEME, DECREMENT, INCREMENT, LOADING } from './types';

export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}

export function loading(isLoading) {
    return {
        type: LOADING,
        payload: isLoading
    };
}

export function asyncIncrement() {
    return function(dispatch) {
        dispatch(loading(true));
        setTimeout(() => {
            dispatch(increment());
            dispatch(loading(false));
        }, 1500);
    };
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    };
}