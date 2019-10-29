import { combineReducers } from "redux";
import todoListReducer from "./todoListReducer"

// 創建了一個reducer函數來告訴Redux我們的狀態應該是什麼樣的。
export default combineReducers({
    todoList: todoListReducer,
})