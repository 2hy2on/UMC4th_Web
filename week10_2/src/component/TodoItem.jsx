import React from "react";

const TodoItem = (props) =>{
    return(
        <div className="todo-item">
            {props.item}

            <button onClick={()=>{delete(props.item)}}>삭제</button>
        </div>

    );
};

export default TodoItem;