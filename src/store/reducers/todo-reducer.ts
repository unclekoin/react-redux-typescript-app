import {TodosAction, TodosActionTypes, TodoState} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
}

export const todoReducer = (state: TodoState = initialState, action: TodosAction): TodoState => {
    switch (action.type) {
        case TodosActionTypes.FETCH_TODOS:
            return {...state, loading: true};
        case TodosActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload};
        case TodosActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload};
        case TodosActionTypes.SET_TODOS_PAGE:
            return {...state, page: action.payload};
        default:
            return state;
    }
}
