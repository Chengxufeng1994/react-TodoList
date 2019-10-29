import React, { Component } from "react";
import InputName from "./InputName";

class InputTaskForm extends Component {
    render() {
        return (
            // 為每個輸入框都設定對應state的name。
            // 將受控組件的value都設定為state的值，雖然在這邊還不需給值，不過還是得讓他受控才能改變state，阿不受控的filebox要指定ref給他，讓我們可以在外面控制，至於值就寫進之前為他留的span中。
            // 為每個組件包括filebox都增加onChange事件，讓他值改變時可以寫到state中。
            // 把送出新增的事件submitTodo指定給＋ Save按鈕的onClick觸發。
            <div className="InputTasksForm">
                <div className="InputTask">
                    <InputName
                        icon="fas fa-calendar-alt"
                        inputName="Deadline" />
                    <div className="inputForm">
                        <input
                            className="inputStyle inputDateTime"
                            name="date"
                            type="date"
                            onChange={this.props.handleChange}
                            value={this.props.state.date} />
                        <span> </span>
                        <input
                            className="inputStyle inputDateTime"
                            name="time"
                            type="time"
                            onChange={this.props.handleChange}
                            value={this.props.state.time}
                        />
                    </div>
                    <InputName
                        icon="fas fa-file"
                        inputName="File" />
                    <div className="inputForm">
                        <input
                            className="inputStyle"
                            name="file"
                            type="file"
                            ref={this.props.fileRef}
                            onChange={this.props.changeFile}
                        />
                        <br />
                        <span className="inputStyle">{this.props.state.file}</span>
                    </div>
                    <InputName
                        icon="fas fa-comment-dots"
                        inputName="Comment" />
                    <div className="inputForm">
                        <textarea
                            className="inputStyle"
                            name="commit"
                            id=""
                            cols="55"
                            rows="7"
                            placeholder="Type your memo here..."
                            onChange={this.props.handleChange}
                            value={this.props.state.commit}>
                        </textarea>
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        className="addButton cancelButton"
                        onClick={() => this.props.closeAdd()}>
                        Ｘ Cancel
                    </button>
                    <button
                        type="button"
                        className="addButton saveButton"
                        onClick={() => this.props.onSubmit()}>
                        ＋ Save
                    </button>
                </div>
            </div >
        )
    }
}

export default InputTaskForm;