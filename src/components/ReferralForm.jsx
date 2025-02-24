// Import React hooks and Material-UI components for building the form
import { useState } from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';
import axios from 'axios';

// ReferralForm component collects referral data from the user
const ReferralForm = ({ onClose }) => {
  // Define state for form fields and feedback messages (error, success)
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Update state for each input field as the user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple function to validate email format using a regex pattern
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Handle form submission: validate inputs, send data to backend, and provide feedback
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Trim spaces from user inputs to ensure clean data
    const data = {
      referrerName: formData.referrerName.trim(),
      referrerEmail: formData.referrerEmail.trim(),
      refereeName: formData.refereeName.trim(),
      refereeEmail: formData.refereeEmail.trim(),
    };

    // Validate that all fields have been filled
    if (!data.referrerName || !data.referrerEmail || !data.refereeName || !data.refereeEmail) {
      setError('All fields are required.');
      return;
    }

    // Validate email format for both referrer and referee
    if (!validateEmail(data.referrerEmail) || !validateEmail(data.refereeEmail)) {
      setError('Please enter valid email addresses.');
      return;
    }

    try {
      // Send the referral data to the backend API
      const res = await axios.post('http://localhost:5000/api/referrals', data);
      // On success, display a success message
      setSuccess(res.data.message);
      // Reset form fields for potential new submissions
      setFormData({
        referrerName: '',
        referrerEmail: '',
        refereeName: '',
        refereeEmail: '',
      });
      // Automatically close the form/modal after 2 seconds
      setTimeout(() => onClose(), 2000);
    } catch (err) {
      // If the error is due to a duplicate referral, display a specific message
      if (err.response?.status === 409) {
        setError('Referral with this email already exists.');
      } else {
        // Otherwise, display a generic error message
        setError(err.response?.data?.error || 'Submission failed. Please try again.');
      }
    }
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        mt: 2,
        width: { xs: '90%', sm: '80%', md: '400px' }, // Responsive width adjustments
        mx: 'auto' // Center the form horizontally
      }}
    >
      {/* Display error message if any */}
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {/* Display success message if submission is successful */}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
      <TextField
        fullWidth
        margin="normal"
        label="Your Name"
        name="referrerName"
        value={formData.referrerName}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Your Email"
        name="referrerEmail"
        value={formData.referrerEmail}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Friend's Name"
        name="refereeName"
        value={formData.refereeName}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Friend's Email"
        name="refereeEmail"
        value={formData.refereeEmail}
        onChange={handleChange}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        fullWidth 
        sx={{
          mt: 2,
          py: { xs: 1, sm: 1.5 } // Responsive vertical padding for better touch experience on mobile
        }}
      >
        Submit Referral
      </Button>
    </Box>
  );
};

export default ReferralForm;
