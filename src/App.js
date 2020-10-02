import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import TopBar from "./components/TopbBar";


function App() {
    return (
        <Router>
            <div>
                <TopBar/>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


export default App;
