import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';

const PostDonation = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [condition, setCondition] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('location', location);
      formData.append('condition', condition);
      formData.append('category', category);
      for (let i = 0; i < images.length && i < 5; i++) {
        formData.append('images', images[i]);
      }

      await axios.post('/api/donations', formData);
      alert('Donation posted successfully!');
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert('Failed to post donation.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '40px' }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>Post a Donation</Typography>
          <form onSubmit={handleSubmit}>
            <TextField label="Title" fullWidth margin="normal" value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextField label="Description" fullWidth margin="normal" multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
            <TextField label="Location" fullWidth margin="normal" value={location} onChange={(e) => setLocation(e.target.value)} />
            <TextField label="Condition" fullWidth margin="normal" value={condition} onChange={(e) => setCondition(e.target.value)} />
            <TextField label="Category" fullWidth margin="normal" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="file" accept="image/*" multiple onChange={(e) => setImages(e.target.files)} style={{ marginTop: '1rem' }} />
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PostDonation;
