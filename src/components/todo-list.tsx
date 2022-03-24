import React, { FC, useEffect } from 'react';
import { useTypedSelector } from "../hooks/use-typed-selector";
import { useActions } from "../hooks/use-actions";

const TodoList: FC = () => {
    const { todos, loading, error, limit, page } = useTypedSelector((state) => state.todo);
    const { fetchTodos, setTodosPage } = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    if (loading) return <h3>Loading...</h3>;

    if (error) return <h3>{ error }</h3>;

    return (
        <div>
            <ul className="list-group mb-3">
                { todos.map((todo) => (
                    <li key={ todo.id } className="list-group-item d-flex">
                        <div className='me-3'>{ todo.id }.</div>
                        <div>{ todo.title }</div>
                    </li>)) }
            </ul>
            <nav className="d-flex justify-content-center">
                <ul className="pagination pagination-sm">
                    { pages.map((p) =>
                        <li
                            onClick={() => setTodosPage(p)}
                            className={ `page-item${p === page ? ' active' : ''}` }
                            key={p}
                        >
                            <a className="page-link" href="#">{ p }</a>
                        </li>
                    ) }
                </ul>
            </nav>
        </div>
    );
};

export default TodoList;
