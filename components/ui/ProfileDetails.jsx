import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const ProfileDetails = (props) => {
  return (
    <div>
      <div className='flex f-space-btw' style={{ paddingInline: 20 }}>
        <Avatar src={props.image} sx={{ width: 140, height: 140 }} />
        <Button variant='outlined' sx={{ borderRadius: 8 }}>
          Edit Profile
        </Button>
      </div>

      <div style={{ paddingInline: '20px' }}>
        <h3>{props.username}</h3>
        <h4>{props.role}</h4>
        <div style={{ width: '50%' }} className='flex f-space-btw'>
          <span>
            <span style={{ fontWeight: 600 }}>27</span> Following
          </span>{' '}
          <h3>&nbsp;|&nbsp;</h3>
          <span>
            <span style={{ fontWeight: 600 }}>40.1M</span> Followers
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
