import React from 'react';
import { Button, Stack, Typography, Box, Divider, Avatar } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';

const ResumeSection = () => {
  return (
    <Box
      sx={{
        // py: 8,
        bgcolor: 'grey.50',
        minHeight: window.innerWidth < 500 ?  '60vh' : "75vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: window.innerWidth <600 ? 3 : 0
      }}
    >
      <Stack
        spacing={4}
        alignItems="center"     
        sx={{
          bgcolor: 'white',
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
          maxWidth: 600,
          width: '100%',
        //   border: '2px solid transparent',
          backgroundImage: 'linear-gradient(white, white), linear-gradient(45deg, #3b82f6, #a855f7)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        <Avatar
          sx={{
            bgcolor: ' #FFC107',
            width: 56,
            height: 56,
            mb: 1,
          }}
        >
          <DescriptionIcon fontSize="large" />
        </Avatar>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            textAlign: 'center',
            letterSpacing: 1,
            fontSize: { xs: '2rem', sm: '2.5rem' },
          }}
        >
          My Resume
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            px: { xs: 2, sm: 4 },
            lineHeight: 1.6,
          }}
        >
          Explore my professional journey and expertise by previewing or downloading my resume.
        </Typography>
        <Divider sx={{ width: '60%', bgcolor: 'grey.300' }} />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ width: '100%', justifyContent: 'center', px: 2 }}
        >
          <Button
            variant="outlined"
            color="primary"
            href="/react js developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<OpenInNewIcon />}
            sx={{
              flex: 1,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 500,
              borderWidth: 2,
              transition: 'all 0.3s ease',
              border:'1px solid #FFC107' , 
              color:'#FFC107',
              '&:hover': {
                bgcolor: ' #FFC107',
                color: 'white',
                borderColor: 'primary.dark',
                transform: 'scale(1.05)',
              },
            }}
          >
            Preview Resume
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="/react js developer.pdf"
            download="Rahul_Chourasiya_Resume.pdf"
            startIcon={<DownloadIcon />}
            sx={{
              flex: 1,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 500,
              transition: 'all 0.3s ease',
              backgroundColor:"#FFC107",
              '&:hover': {
                bgcolor: ' #FFC107',
                transform: 'scale(1.05)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            Download Resume
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ResumeSection;