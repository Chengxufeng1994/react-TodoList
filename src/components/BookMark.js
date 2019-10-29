import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class BookMark extends Component {
    render() {
        return (
            <Route
                exact path={this.props.path}
                children={props => {
                    if (props.match) {
                        return (
                            <Link to={this.props.path}>
                                <button className="bookMark  select_bookMark">
                                    {this.props.name}
                                </button>
                            </Link>
                        )
                    } else {
                        return (
                            <Link to={this.props.path}>
                                <button className="bookMark">
                                    {this.props.name}
                                </button>
                            </Link>
                        )
                    }
                }}
            />
        )
    }
};

export default BookMark;