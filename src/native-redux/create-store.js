export function createStore(rootReducer, initialState) {
    
    let state = rootReducer(initialState, { type: '__INIT__' });
    const subscribers = [];

    console.log('createStore, \tstate: ', state, '\tsubs: ', subscribers);

    return {
        // action = { type: 'ICREMENT' }
        dispatch(action) {
            state = rootReducer(state, action);
            subscribers.forEach(sub => sub());
            console.log('dispatch \t-> \taction', action, '\tstate: ', state, '\tsubs: ', subscribers);
        },
        subscribe(callback) {
            subscribers.push(callback);
            console.log('subscribe \t-> \tcallback', callback, '\tstate: ', state, '\tsubs: ', subscribers);
        },
        getState() {
            console.log('getState, \tstate: ', state, '\tsubs: ', subscribers);
            return state;
        }
    }
}