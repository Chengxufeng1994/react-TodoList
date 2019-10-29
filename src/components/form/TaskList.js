import React, { Component } from "react";
import { connect } from "react-redux";
import InputTask from "./InputTask";
import { editTodoList } from "../../actions"

class TaskList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            important: this.props.listData.important,
            complete: this.props.listData.complete,
            taskEdit: null,
        }
        // 為了讓List可以在點擊後隱藏，就必須要可以先抓到那個div，
        // 但是在組件可以重複使用的狀況下，通常不會為組件內的DOM設定id，
        // 否則當組件重用時，就只會有第一個設定id的生效而已，
        // 那該怎麼辦呢？就用ref吧！
        this.list = React.createRef()
    }

    handleChange = (type) => {
        switch (type) {
            case "complete":
                this.setState({
                    complete: window.event.target.checked
                }, this.updateTodoList)
                break;

            case "important":
                if (this.state.important === "") {
                    this.setState({
                        important: "Y"
                    }, this.updateTodoList)
                } else {
                    this.setState({
                        important: ""
                    }, this.updateTodoList)
                }
                break;

            default:
                break;
        }

    }

    closeEdit = () => {
        this.list.current.style.display = ""
        this.setState({ taskEdit: null })
    }

    openEdit = (event) => {
        if (event.target.className.indexOf('fa-star') === -1 &&
            event.target.className.indexOf('taskCheckbox') === -1) {
            this.list.current.style.display = "none"
            this.setState({
                taskEdit: (<InputTask
                    listData={this.props.listData}
                    closeAdd={this.closeEdit}
                    handleChange={this.handleChange}
                    editTodoList={this.props.editTodoList}
                />)
            })
        }
    }

    updateTodoList = () => {
        //複製一份新的物件，為該代辦事項的資料
        let updateList = Object.assign({}, this.props.listData)
        //用之前學過的解構賦值把complete和important兩個欄位替換成state的值
        updateList = {
            ...updateList
            , complete: this.state.complete
            , important: this.state.important
        }
        //透過editTodoList丟到redux更新
        this.props.editTodoList(updateList)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="listBlock" >
                    <div className={"list" + (this.state.important === "Y" ? " important" : "")}
                        onClick={this.openEdit}
                        // 指定ref給點擊後需隱藏的div
                        ref={this.list}>
                        <input
                            className="taskCheckbox"
                            type="checkbox"
                            checked={this.state.complete}
                            onChange={() => this.handleChange("complete")} />

                        <input
                            type="text"
                            className={" taskTitle" +
                                (this.state.complete ? " complete" : "") +
                                (this.state.important ? " important" : "")}
                            onChange={() => this.handleChange("complete")}
                            value={this.props.listData.name} />

                        <i className={this.state.important === "Y" ? " fas fa-star fa-lg icon iconImportant"
                            : " far fa-star fa-lg icon"}
                            onClick={() => this.handleChange("important")} ></i>
                        <i className="fas fa-pen fa-lg icon"></i>
                        <div className="listIcon">
                            {this.props.listData.date !== "" ? <i className="far fa-calendar-alt icon"></i> : ""}
                            {this.props.listData.date !== "" ? `${this.props.listData.date.substring(5).replace("-", "/")}` : ""}
                            {this.props.listData.file !== "" ? <i className="fas fa-file icon"></i> : ""}
                            {this.props.listData.commit !== "" ? <i className="far fa-comment-dots icon"></i> : ""}
                        </div>
                    </div>
                    {/*在這裡固定輸出this.state.taskEdit*/}
                    <div>
                        {this.state.taskEdit}
                    </div>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editTodoList: todoList => dispatch(editTodoList(todoList))
    }
}

export default connect(null, mapDispatchToProps)(TaskList);
