import { createStore } from './create-store';
import { rootReducer } from './root-reducer';
import './../styles.css'

let counter = document.getElementById('counter');
let addBtn = document.getElementById('add');
let subBtn = document.getElementById('sub');
let asyncBtn = document.getElementById('async');
let themeBtn = document.getElementById('theme');

const store = createStore(rootReducer, 0);

addBtn.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});

subBtn.addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT' });
});

asyncBtn.addEventListener('click', () => {

});

store.subscribe(() => counter.textContent = store.getState().toString());

store.dispatch({ type: 'INIT_APP' });

themeBtn.addEventListener('click', () => {
    // document.body.classList.toggle('dark');
});
