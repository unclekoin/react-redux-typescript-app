import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/use-typed-selector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/use-actions";

const UserList: FC = () => {
    const {users, loading, error} = useTypedSelector((state) => state.user);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <h3>Loading...</h3>;

    if (error) return <h3>{error}</h3>;

    console.log(error)
    return (
        <ul className="list-group">
            {users.map((user) => (
                <li key={user.id} className="list-group-item d-flex">
                    <div className="w-50">{user.name}</div>
                    <div>{user.email}</div>
                </li>))}
        </ul>
    );
};

export default UserList;
