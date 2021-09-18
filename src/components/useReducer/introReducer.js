// Initial state
const initialState = [{
    id: 1,
    todo: 'Buy milk',
    done: false
}];

// Reducer
const todoReducer = ( state = initialState, action ) => {
    // Modify state
    if ( action?.type === 'add' ) {
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

// New todo
const newTodo = {
    id: 2,
    todo: 'Buy milk',
    done: false
};

// Action
const action = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer( todos, action );
console.log(todos);
