import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


function TopBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/"><Button>Home</Button></Link>
                <Link to="/about"><Button>about</Button></Link>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;