import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DonationMarketplace = () => {
  const [donations, setDonations] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get('/api/donations');
        setDonations(response.data);
      } catch (error) {
        console.error('Error fetching donations', error);
      }
    };
    fetchDonations();
  }, []);
  
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>Donation Marketplace</Typography>
      <Grid container spacing={3}>
        {donations.map(donation => (
          <Grid item xs={12} sm={6} md={4} key={donation.id}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              {donation.images.length > 0 && (
                <CardMedia
                  component="img"
                  height="180"
                  image={donation.images[0]}
                  alt={donation.title}
                />
              )}
              <CardContent style={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5">{donation.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {donation.description.substring(0, 100)}...
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                  Donator: {donation.donator.name}
                </Typography>
              </CardContent>
              <Button variant="contained" onClick={() => navigate(`/donation/${donation.id}`)} style={{ margin: '10px' }}>
                View Details
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DonationMarketplace;
