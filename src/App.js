import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import DonationMarketplace from './components/DonationMarketplace';
import DonationDetails from './components/DonationDetails';
import Profile from './components/Profile';
import PostDonation from './components/PostDonation';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/marketplace" element={<DonationMarketplace />} />
        <Route path="/donation/:id" element={<DonationDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post-donation" element={<PostDonation />} />
      </Routes>
    </>
  );
}

export default App;
