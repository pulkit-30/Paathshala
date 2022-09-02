import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Answers from '../userTabs/Answers';
import Doubts from '../userTabs/Doubts';
import RecentActivity from '../userTabs/RecentActivity';
import Sessions from '../userTabs/Sessions';
import Router from 'next/router';
import { useRouter } from 'next/router';

const ProfileTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const router = useRouter();
  const tabsMap = { 0: 'recent', 1: 'doubts', 2: 'answers', 3: 'sessions' };
  const { userId } = router.query;
  const handleChange = (event, newValue) => {
    Router.push({
      pathname: `${userId}`,
      query: { tabs: tabsMap[newValue] },
    });
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant='fullWidth'
        sx={{
          color: 'var(--font-color)',
          '& .Mui-selected': {
            color: 'var(--font-color)',
          },
          '& .MuiTab-textColorPrimary': {
            color: 'var(--font-color)',
          },
        }}
      >
        <Tab label='Recent' />
        <Tab label='Doubts' />
        <Tab label='Answers' />
        <Tab label='Sessions' />
      </Tabs>
      {selectedTab === 0 && <RecentActivity />}
      {selectedTab === 1 && <Doubts />}
      {selectedTab === 2 && <Answers />}
      {selectedTab === 3 && <Sessions />}
    </Box>
  );
};

export default ProfileTabs;
