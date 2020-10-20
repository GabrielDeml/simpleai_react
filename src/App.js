import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import TopBar from "./components/TopbBar";
import TensorFlowTest from "./components/TensorFlowTest";


function App() {
    return (
        <BrowserRouter>
            <div>
                <TopBar/>
                <Switch>
                    <Route path="/tensorflowjstest">
                        <TensorFlowTest/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


export default App;
