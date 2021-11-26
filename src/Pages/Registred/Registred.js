import React from 'react';
import { Button, Container, Grid, Typography, CircularProgress, Alert } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registred = () => {

    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        //  console.log(field, value, loginData)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password did not match')
            return
        }
        //alert('registered successfully');

        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 15 }} item xs={12} sm={12} md={12}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>

                        <TextField
                            sx={{ width: '55%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            type="text"
                            name="name"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '55%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '55%', m: 1 }}
                            id="standard-basic"
                            label="Your PassWord"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '55%', m: 1 }}
                            id="standard-basic"
                            label="Confirm PassWord"
                            type="password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard"
                        />

                        <Button
                            sx={{ width: '55%', m: 1 }}
                            type="submit"
                            variant="contained"
                        >Register</Button>

                        <NavLink to="/login">
                            <Button
                                variant="text"
                                sx={{ width: '55%', m: 1, textDecoration: 'none' }}
                            >All ready registred ? Please login </Button>
                        </NavLink>

                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Registred;