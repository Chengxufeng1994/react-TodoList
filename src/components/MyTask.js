import React, { Component } from "react";
import AddTasks from "./form/AddTasks";
import TaskLists from "./TaskLists";

class MyTasks extends Component {
    render() {
        return (
            <div className="InputTasksForm">
                <AddTasks />
                <TaskLists />
            </div>
        )
    }
}

export default MyTasks;