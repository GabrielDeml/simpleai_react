import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "react-router-dom/modules/Link";

function TopBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <li>
                    <Link to="/">Hello</Link>
                </li>
                <Button color="inherit">About</Button>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;