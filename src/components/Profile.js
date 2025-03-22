import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile');
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h5">Loading profile...</Typography>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>{profile.name}'s Profile</Typography>
      <Typography>Email: {profile.email}</Typography>
      <Typography>Phone: {profile.phone}</Typography>
      <Typography>Age: {profile.age}</Typography>
      <Typography>Date of Birth: {profile.date_of_birth}</Typography>
      <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>Your Donations</Typography>
      <Grid container spacing={3}>
        {profile.donations.map((donation) => (
          <Grid item xs={12} sm={6} md={4} key={donation.id}>
            <Card>
              {donation.images.length > 0 && (
                <CardMedia
                  component="img"
                  height="180"
                  image={donation.images[0]}
                  alt={donation.title}
                />
              )}
              <CardContent>
                <Typography variant="h6">{donation.title}</Typography>
                <Typography variant="body2">
                  {donation.description.substring(0, 100)}...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Profile;
