const ADD_TODO = 'todos/ADD_TODO';

let nextId = 1;
const addTodo = (content) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        content
    }
});

const todos = (state = [], action) =>{
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        default:
            return state;
    }
}

export default todos;