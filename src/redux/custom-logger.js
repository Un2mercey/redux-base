// custom middleware
export function logger(state) {
    return function(next) {
        return function(action) {
            console.log('logger -> log -> state\t', state.getState());
            console.log('logger -> log -> next\t',  next);
            console.log('logger -> log -> action\t',action);
            return next(action);
        };
    };
}