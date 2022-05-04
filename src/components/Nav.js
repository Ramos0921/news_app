import React from "react";
import { makeStyles, Tab, Tabs, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    navTab: {
        fontWeight: 500,
    }
});

export const NavBar = () => {
    const classes = useStyles();
    return <Toolbar>
        <Tabs>
            <Tab className={classes.navTab} component={Link} to={'/top-news'} label='Top News'/>
            <Tab className={classes.navTab} component={Link} to={'/categories'} label='Categories'/>
            <Tab className={classes.navTab} component={Link} to={'/search-news'} label='Search'/>
        </Tabs>
    </Toolbar>
}   