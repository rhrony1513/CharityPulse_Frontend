import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CircularProgress } from '@mui/material';
import axios from 'axios';

const DonationDetails = () => {
  const { id } = useParams();
  const [donation, setDonation] = useState(null);

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const response = await axios.get(`/api/donations/${id}`);
        setDonation(response.data);
      } catch (error) {
        console.error('Error fetching donation details', error);
      }
    };
    fetchDonation();
  }, [id]);

  if (!donation) {
    return (
      <Container style={{ marginTop: '20px', textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <Card style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>{donation.title}</Typography>
        <Typography variant="body1" gutterBottom>{donation.description}</Typography>
        <Typography variant="subtitle1" gutterBottom>Location: {donation.location}</Typography>
        <Typography variant="subtitle1" gutterBottom>Category: {donation.category}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Posted by {donation.donator.name} on {new Date(donation.timestamp).toLocaleString()}
        </Typography>
        {donation.images && donation.images.length > 0 && (
          <img
            src={donation.images[0]}
            alt={donation.title}
            style={{ width: '100%', marginTop: '20px', borderRadius: '8px' }}
          />
        )}
      </Card>
    </Container>
  );
};

export default DonationDetails;
