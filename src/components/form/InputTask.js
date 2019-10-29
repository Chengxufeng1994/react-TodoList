import React, { Component } from "react";
import { connect } from "react-redux";

import InputTasksForm from "./InputTasksForm";
import { createTodoList } from "../../actions";

class InputTask extends Component {
    constructor(props) {
        super(props);

        this.changeListState = type => {
            if (this.props.handleChange) {
                this.props.handleChange(type)
            } else {
                console.log("新增狀態所以沒有this.props.handleChange")
            }
        }
        //如果有值的話就寫入值，沒值就預設都空的
        if (this.props.listData) {
            this.state = this.props.listData
        } else {
            this.state = {
                id: "",
                name: "",
                date: "",
                time: "",
                file: "",
                commit: "",
                important: "",
                complete: false,
            }
        }
        // 依照todoData做設定:

        // 檔案上傳的input無法設定value,故使用ref處理
        this.fileRef = React.createRef()
    }
    // 取目前發生改變的值
    handleChange = event => {
        // event.target 回傳輸入值
        // console.log(event.target)
        let value = event.target.value;
        // 設定值給對應的name欄位，所以我們組件的name都要設的和state中的名稱一樣
        this.setState({ [event.target.name]: value })
    }
    // checkbox也另外處理，因為沒有值
    changeComplete = event => {
        // console.log(event.target)
        let value = event.target.checked;
        //一併更新狀態到外面的`List`組件去
        this.changeListState('complete')
        this.setState({ [event.target.name]: value })
    }
    // 如果是檔案的話因為會有路徑，所以這裡只抓檔名
    changeFile = event => {
        console.log(event.target)
        let value = event.target.value;
        value = value.substring(value.lastIndexOf("\\") + 1)
        this.setState({ [event.target.name]: value })
    }
    //
    onSubmit = () => {
        // 確認代辦事項有名稱
        if (this.state.name === "") {
            alert("請輸入待辦事項!!!")
        } else {
            // 判斷id是否有值
            if (this.state.id === "") {
                // 將state的資料送至createTodoList新增
                this.props.createTodoList(this.state)
                // 新增成功
                alert("新增成功!!!")
            } else {
                //有的話就執行編輯
                this.props.editTodoList(this.state)
                alert('編輯成功！')
            }
            // 關閉新增畫面
            this.props.closeAdd()
            //初始化表單
            this.setState({
                id: '',
                name: '',
                date: '',
                time: '',
                file: '',
                commit: '',
                important: '',
                complete: false
            })

        }

    }
    // 因為星星本身沒有value可以控制，所以特別寫一個用來異動state的function
    tagImportant = () => {
        if (this.state.important === "") {
            this.setState({ important: "Y" })
        } else {
            this.setState({ important: "" })
        }
        //一併更新狀態到外面的`List`組件去
        this.changeListState('important')
    }

    render() {
        return (
            <div>
                <div className={this.state.important === "Y" ? " important inputTaskTitle"
                    : " inputTaskTitle"}>
                    <input
                        className="taskCheckBox"
                        name="complete"
                        type="checkbox"
                        onChange={this.changeComplete}
                        checked={this.state.complete}
                    />
                    {/*替該name設定對應的state名稱，
                       然後指定value為state中的值，
                       和增加onChange事件，
                       讓值改變時可以同時寫回`state`*/}
                    <input
                        className={'taskTitle' + (this.state.complete ? " complete" : "")}
                        name="name"
                        placeholder="Type Something Here..."
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />

                    <i className={this.state.important === "Y" ? " fas fa-star fa-lg icon iconImportant"
                        : " far fa-star fa-lg icon"}
                        onClick={this.tagImportant}></i>
                    <i className="fas fa-pen fa-lg icon icon_edit"></i>
                </div>
                <InputTasksForm
                    closeAdd={this.props.closeAdd}
                    fileRef={this.fileRef}
                    changeFile={this.changeFile}
                    handleChange={this.handleChange}
                    onSubmit={this.onSubmit}
                    state={this.state}
                />
            </div >

        )
    }
}

const mapDisptchToProps = dispatch => {
    return {
        // 使用dipatch呼叫事件createTodoList操作store
        createTodoList: (todoList) => dispatch(createTodoList(todoList))
    }
}

export default connect(null, mapDisptchToProps)(InputTask);
