

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TODO':
            return action.payload;
            break;
        case 'ADD_TODO':
            return [ ...state, action.payload ]
        default:
            return state
            break;
    }
}

export default todoReducer;

// function todoReducer(state = [], action) {
    
// }