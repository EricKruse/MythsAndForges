import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import useStyles from './styles';
import Input from './input';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const handleShowPassword = () => setShowPassword((prev_ShowPassword) => !prev_ShowPassword);
    const switchMode = () => {
        setIsSignup((prev_IsSignup) => !prev_IsSignup);
        handleShowPassword(false);
    }

    const handleSubmit = () => {
        
    }

    const handleChange = () => {
        
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5" >
                    {isSignup ? (
                        "Sign up"
                    ) : (
                        "Sign in"
                    )}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="username" label="Username" handleChange={handleChange} autoFocus />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary">
                        { isSignup ? "Sign up" : "Sign in" }
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;