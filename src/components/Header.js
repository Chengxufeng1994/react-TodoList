import React, { Component } from "react";
import BookMark from "./BookMark";
import { connect } from "react-redux";
import { createTodoList } from "../actions"

class TopBlock extends Component {
    render() {
        return (
            <div id="topBlock">
                <BookMark path="/" name="My Tasks" />
                <BookMark path="/inProgress" name="In Progress" />
                <BookMark path="/completed" name="Completed" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
    }
}

export default connect(mapStateToProps, { createTodoList })(TopBlock);