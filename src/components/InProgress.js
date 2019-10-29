import React, { Component } from "react";
import TaskLists from "./TaskLists"

class InProgress extends Component {
    render() {
        return (
            <div className="InputTasksForm">
                <TaskLists page="inProgress" />
            </div>
        )
    }
}

export default InProgress