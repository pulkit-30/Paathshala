import { WalletOutlined, WalletRounded } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import Glass from '../ui/Glass';

const Wallet = () => {
  return (
    <Button variant='outlined' className='wallet flex f-space-eve'>
      <h3 className='flex s-space-eve'>
        <WalletOutlined /> &nbsp; Wallet
      </h3>
      <h3>100</h3>
    </Button>
  );
};

export default Wallet;
