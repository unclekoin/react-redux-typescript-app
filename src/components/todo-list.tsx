import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/use-typed-selector";
import {useActions} from "../hooks/use-actions";

const TodoList: FC = () => {
    const {todos, loading, error, limit, page} = useTypedSelector((state) => state.todo);
    const {fetchTodos} = useActions();

    useEffect(() => {
        fetchTodos();
    }, [page, limit]);

    if (loading) return <h3>Loading...</h3>;

    if (error) return <h3>{error}</h3>;

    return (
        <div>
            {todos.map((todo) => (
                <li key={todo.id} className="list-group-item d-flex">
                    <div className='me-3'>{todo.id}.</div>
                    <div>{todo.title}</div>
                </li>))}
        </div>
    );
};

export default TodoList;
