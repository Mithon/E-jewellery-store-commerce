import { Alert, Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        //console.log(field, value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        // alert('form login');
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 15 }} item xs={12} sm={12} md={12}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>

                        <TextField
                            sx={{ width: '55%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
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

                        <Button
                            sx={{ width: '55%', m: 1 }}
                            type="submit"
                            variant="contained"
                        >Login</Button>

                        <NavLink to="/register">
                            <Button
                                variant="text"
                                sx={{ width: '55%', m: 1, textDecoration: 'none' }}
                            >New User? Please register </Button>
                        </NavLink>

                    </form>

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;