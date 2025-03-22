import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      age,
      phone,
      date_of_birth: dateOfBirth,
    };

    try {
      await axios.post('/api/register', userData, {
        headers: { 'Content-Type': 'application/json' },
      });
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.response.data);
      alert('Registration failed. Try again.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '40px' }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>Register</Typography>
          <form onSubmit={handleSubmit}>
            <TextField label="Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
            <TextField label="Age" fullWidth margin="normal" value={age} onChange={(e) => setAge(e.target.value)} />
            <TextField label="Phone" fullWidth margin="normal" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <TextField
              label="Date of Birth"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <Button variant="contained" type="submit" color="primary" fullWidth style={{ marginTop: '20px' }}>
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Register;
