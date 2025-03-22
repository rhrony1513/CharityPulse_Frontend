import React, { useState, useContext } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; // ✅ import context

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // ✅ use login from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await axios.post('/api/login', formData);

      // ✅ if login is successful, store user info in context
      if (response.status === 200) {
        login({ email }); // you can store more user data if returned by API
        navigate('/marketplace');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid login. Try again.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '40px' }}>
      <Card style={{ padding: '20px', textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>Login</Typography>
          <form onSubmit={handleSubmit}>
            <TextField 
              label="Email" 
              fullWidth 
              margin="normal" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField 
              label="Password" 
              type="password"
              fullWidth 
              margin="normal" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" type="submit" color="primary" fullWidth style={{ marginTop: '20px' }}>
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
