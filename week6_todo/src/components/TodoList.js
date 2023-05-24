import React, { useState } from 'react';
import {addTodo } from '../redux/todos';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const onInsert = content => dispatch(addTodo(content));

    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onInsert(text);
        setText('');
    };


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={text}
                    placeholder="할 일 입력"
                    onChange={onChange}
                />
                <button type="submit">확인</button>
            </form>
            {todos.map(todo => (
                <TodoItem key={todo.id} content={todo.content} />
            ))}

        </div>
    )
}

export default TodoList;