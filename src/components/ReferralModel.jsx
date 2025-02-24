// Import Material-UI components and our ReferralForm component
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReferralForm from './ReferralForm.jsx';

// Define responsive styles for the modal container
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 400 }, // Adjust modal width for different screen sizes
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: { xs: 2, sm: 4 }, // Responsive padding for a consistent look
};

// ReferralModal component renders a modal with a close button and the ReferralForm inside
const ReferralModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        {/* Header section with title and close button */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Refer a Friend</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        {/* Render the referral form */}
        <ReferralForm onClose={onClose} />
      </Box>
    </Modal>
  );
};

export default ReferralModal;
