import React from "react";
import Button from '@material-ui/core/Button';
import TopBar from "./components/TopbBar";

function clickTheButton() {
    console.log("I was clicked")
}

function App() {
    return (
        <div>
            <p>SimpleAI</p>
            <Button onClick={clickTheButton}>Click me</Button>
        </div>
    );
}


export default App;
