import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container style={{ marginTop: '40px', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>Welcome to the Donation Platform</Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Find donations or contribute to the community by sharing what you don't need.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/marketplace')} style={{ marginRight: '10px' }}>
        View Marketplace
      </Button>
      <Button variant="outlined" color="primary" onClick={() => navigate('/post-donation')}>
        Post a Donation
      </Button>
    </Container>
  );
}

export default Home;
