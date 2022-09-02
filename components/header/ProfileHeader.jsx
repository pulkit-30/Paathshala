import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';

const ProfileHeader = (props) => {
  const router = useRouter();
  return (
    <div
      className='flex f-start'
      style={{
        position: 'sticky',
        backgroundColor: 'rgba(0, 113, 188, 0.1)',
        padding: 5,
      }}
    >
      <IconButton
        aria-label='back'
        color='primary'
        onClick={() => router.back()}
      >
        <ArrowBackIcon />
      </IconButton>
    </div>
  );
};

export default ProfileHeader;
