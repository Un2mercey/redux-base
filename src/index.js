import './styles.css';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/root-reducer';
import { asyncIncrement, changeTheme, decrement, increment } from './redux/actions';

const middleware = [thunk, logger];

let counter = document.getElementById('counter');
let addBtn = document.getElementById('add');
let subBtn = document.getElementById('sub');
let asyncBtn = document.getElementById('async');
let themeBtn = document.getElementById('theme');

// without dev-tools-extension
// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(thunk, logger),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

// with dev-tools-extension
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);


// application logic

addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement());
});

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
        ? 'dark'
        : 'light';
    store.dispatch(changeTheme(newTheme));
});

store.subscribe(() => {
    const state = store.getState();

    counter.textContent = state.counter.toString();
    document.body.className = state.theme.value;

    [addBtn, subBtn, asyncBtn, themeBtn].forEach(btn => btn.disabled = state.loading);

    if (state.loading)
        [addBtn, subBtn, asyncBtn, themeBtn].forEach(btn => btn.textContent = 'Loading...');
    else {
        addBtn.textContent = 'Add';
        subBtn.textContent = 'Sub';
        asyncBtn.textContent = 'Async';
        themeBtn.textContent = 'Change theme';
    }
});

store.dispatch({ type: 'INIT_APP' });

