import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Optionally clear storage, redirect, etc.
  };

  return (
    <AppBar position="static">
      <Toolbar>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
          >
            Charity Pulse
          </Typography>

          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/marketplace">Marketplace</Button>
          <Button color="inherit" component={Link} to="/post-donation">Post Donation</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
        </Box>

        {/* Right Side */}
        {user ? (
          <Button color="inherit" onClick={handleLogout}>Sign Out</Button>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
