import './styles.css';

let state = 0;
let counter = document.getElementById('counter');
let addBtn = document.getElementById('add');
let subBtn = document.getElementById('sub');
let asyncBtn = document.getElementById('async');
let themeBtn = document.getElementById('theme');


addBtn.addEventListener('click', () => {
    state++;
    render();
});

subBtn.addEventListener('click', () => {
    state--;
    render();
})

asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        state++;
        render();
    }, 1000);
})

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

function render() {
    counter.textContent = state.toString();
}

render();