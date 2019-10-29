import React, { Component } from "react"
import InputTask from "./InputTask"

class AddTasks extends Component {
    closeAdd = () => {
        //顯示輸入框
        document.getElementById('addTask').style.display = "";
        //隱藏輸入表單
        document.getElementById('inputTask').style.display = 'none';
    };

    openAdd = () => {
        // 將輸入框設定隱藏
        document.getElementById('addTask').style.display = 'none';
        // 輸入表單設定顯示
        document.getElementById('inputTask').style.display = "";
    };

    render() {
        return (
            <div>
                <div>
                    <input
                        id="addTask"
                        placeholder=" ＋ Add Task"
                        onClick={() => this.openAdd()} />
                </div>
                <div id="inputTask"
                    style={{ display: "none" }}
                >
                    <InputTask
                        closeAdd={this.closeAdd} />
                </div>
            </div>
        )
    }
}

export default AddTasks