import React from "react";
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';

import useStyles from './styles';

const NavBar = () => {
    const classes = useStyles();
    const user = null;

    return(
        <AppBar className={classes.AppBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
                Myths & Forges
                </Typography>
            </div>
            <Toolbar className={classes.Toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.orange} alt={user.result.name} src={user.result.imageUrl}>
                        {user.result.name.vharAt(0) /* First character or username if no img */}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">
                        {user.result.name}
                        </Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">
                        Logout
                        </Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">
                    Login
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;