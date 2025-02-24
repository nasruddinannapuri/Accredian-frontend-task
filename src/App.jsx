// Import useState hook from React and the Hero and ReferralModal components
import { useState } from 'react';
import Hero from './components/Hero.jsx';
// Note: Make sure the file name matches exactly (ReferralModal.jsx, not ReferralModel.jsx)
import ReferralModal from './components/ReferralModel.jsx';

// Main App component that controls the state for opening and closing the referral modal
const App = () => {
  const [openModal, setOpenModal] = useState(false);

  // Function to open the referral modal
  const handleOpenModal = () => setOpenModal(true);
  // Function to close the referral modal
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      {/* Display the Hero section with a button to refer a friend */}
      <Hero onReferClick={handleOpenModal} />
      {/* Render the referral modal when openModal is true */}
      <ReferralModal open={openModal} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
