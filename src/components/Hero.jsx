// Import necessary components from Material-UI for styling and structure
import { Button, Box, Typography } from '@mui/material';

// Hero component displays a welcome message and a call-to-action button
const Hero = ({ onReferClick }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        p: { xs: 3, sm: 5, md: 7 }, // Responsive padding: adjusts for mobile, tablet, desktop
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography 
        variant="h3" 
        gutterBottom
        sx={{
          fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' } // Responsive font sizes
        }}
      >
        Welcome to the Refer & Earn Program!
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={onReferClick}
        sx={{
          fontSize: { xs: '0.8rem', sm: '1rem' },
          px: { xs: 2, sm: 3 } // Responsive horizontal padding
        }}
      >
        Refer Now
      </Button>
    </Box>
  );
};

export default Hero;
