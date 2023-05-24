import React from 'react'

const TodoItem = ({ id, content }) => {
    return (
        <div>
            <h3>({id}) {content}</h3>
        </div>
    )
}

export default TodoItem