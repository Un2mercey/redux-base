export function rootReducer(state, action) {
    console.log('rootReducer \t-> \tstate', state, ' \t-> \taction ', action);
    
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}