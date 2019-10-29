import React from "react";
import { HashRouter, Route } from "react-router-dom"

import Header from "./Header"
import MyTasks from "./MyTask";
import InProgress from "./InProgress";
import Completed from "./Completed";

const App = () => {
    return (
        <HashRouter>
            <div>
                <Header />
                <Route exact path="/" component={MyTasks} />
                <Route exact path="/inProgress" component={InProgress} />
                <Route exact path="/completed" component={Completed} />
            </div>
        </HashRouter>
    )
}

export default App;