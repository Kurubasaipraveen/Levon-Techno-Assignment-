import React from 'react';
import { Box, Typography } from '@mui/material';
function Footer() {
  return (
    <Box component="footer" sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" color="textSecondary" align="center">
        © 2024 My Dashboard
      </Typography>
    </Box>
  );
}

export default Footer;
