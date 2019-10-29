import {
    CREATE_TODOLIST,
    EDIT_TODOLIST
} from "../actions/types"
import todoData from "../constants/todoData"

export default (state = todoData, action) => {
    // switch statement
    switch (action.type) {
        case CREATE_TODOLIST:
            return {
                ...state, [action.payload.id]: action.payload
            }
        case EDIT_TODOLIST: {
            //先以目前的資料去複製另一個全新的陣列
            let newState = state.slice(0)
            //下迴圈比對id值
            for (let i = 0; i <= newState.length - 1; i++) {
                if (newState[i].id === action.payload.id) {
                    //將新的資料用splice()取代原本的位置中的資料
                    newState.splice(i, 1, action.payload)
                    break;
                }
            }
            //回傳處理後的新資料
            return newState
        }
        default:
            return state
    }
    // if statement
    // if (action.type === "FETCH_POSTS") {
    //     return action.payload;
    // }

    // return state
}