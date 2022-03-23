import React from 'react';
import UserList from "./components/user-list";
import TodoList from "./components/todo-list";

const App = () => {
    return (
        <div className="container p-5">
            <UserList/>
            <TodoList/>
        </div>
    );
};

export default App;
