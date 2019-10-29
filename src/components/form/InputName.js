import React, { Component } from "react"

class InputName extends Component {
    render() {
        return (
            <div className="inputName">
                <i className={this.props.icon}></i> {this.props.inputName}
            </div>
        )
    }
}

export default InputName