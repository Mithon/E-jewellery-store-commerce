import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
//import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    //const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>


                    {/* <Link to="/homes">Home</Link>
                    {user?.email && <Link to="/myorder">My Orders</Link>} */}

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link style={{ textDecoration: 'none', color: 'yellow' }} to="/">
                            <Button color="inherit">E-jewellery Store</Button>
                        </Link>
                    </Typography>

                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                        <Button color="inherit">Explore</Button>
                    </Link>

                    {user?.email && <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                        <Button color="inherit">Dashboard</Button>
                    </NavLink>}

                    <span>{user.displayName}</span>

                    {
                        user?.email ?
                            <Button style={{ textDecoration: 'none', color: 'black' }} onClick={logout} color="inherit">Logout</Button>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;