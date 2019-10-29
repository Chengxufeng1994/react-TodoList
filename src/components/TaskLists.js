import React, { Component } from "react";
import { connect } from "react-redux";
import TaskList from "./form/TaskList"

class TaskLists extends Component {
    renderCount() {
        let todoCount = 0
        this.props.todoLists.map(todoList => {
            switch (this.props.page) {
                case "inProgress": {
                    if (todoList.complete)
                        return null
                    break;
                }
                case "completed": {
                    if (!todoList.complete)
                        return null
                    break;
                }
            }
            //算數量
            if (this.props.page) {
                todoCount++
            }
            else if (!todoList.complete) {
                todoCount++
            }
        })
        return todoCount
    }

    renderList() {
        this.props.todoLists.sort((a, b) => {
            return a.important < b.important ? 1 : -1
        }).sort((a, b) => {
            return a.complete > b.complete ? 1 : -1
        })
        return this.props.todoLists.map(todoList => {
            return <TaskList
                key={todoList.id}
                listData={todoList} />
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    {this.renderList()}
                </div>
                <div className="countText">
                    <span>{this.renderCount()} tasks {this.props.page === "completed" ? "completed" : "left"}</span>
                </div>
            </div>
        )
    }
}

const mapStateToprops = state => {
    return {
        // streams: Object.values(state.streams)
        todoLists: Object.values(state.todoList)
    }
}

export default connect(mapStateToprops)(TaskLists)