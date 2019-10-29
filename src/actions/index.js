// Action Creator
import {
    CREATE_TODOLIST,
    EDIT_TODOLIST
} from "./types"

export const createTodoList = (todoList) => {
    return {
        type: CREATE_TODOLIST,
        payload: todoList
    }
}

export const editTodoList = (todoList) => {
    return {
        type: EDIT_TODOLIST,
        payload: todoList
    }
}