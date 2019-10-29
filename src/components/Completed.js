import React, { Component } from "react";
import TaskLists from "./TaskLists"

class Completed extends Component {
    render() {
        return (
            <div className="InputTasksForm">
                <TaskLists page="completed" />
            </div>
        )
    }
}

export default Completed