import React, { useEffect, useState } from 'react';
import Glass from '../ui/Glass';
import SearchBox from '../utils/SearchBox';
import Flex from '../ui/Flex';
import Wallet from '../utils/Wallet';
import { Avatar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';

const RecentActivity = (props) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const subscribe = () => {
      document
        .querySelector('.section_activity')
        ?.classList.remove('display-sidebar-menu');
    };
    return subscribe;
  }, [openMenu]);
  return (
    <Flex className='f-column'>
      <IconButton
        aria-label='close button'
        className='hamburger'
        onClick={() => {
          if (openMenu) setOpenMenu(false);
          else setOpenMenu(true);
        }}
      >
        <CloseIcon />
      </IconButton>
      <SearchBox />
      <Wallet />
      {props.children}
      <Glass className='activity_container flex'>
        <h4>No Recent User Activities</h4>
      </Glass>

      <Glass className='activity_container flex f-column'>
        <h3 className='flex f-start'>What’s happening</h3>
        <div
          className='info flex f-space-btw'
          onClick={() => router.push('/article/article-mustafa')}
        >
          <span className='flex f-start f-column'>
            <h4>Article</h4>
            <p>Mustafa has written an article</p>
          </span>
          <Avatar alt='P' src='/static/images/avatar/1.jpg' />
        </div>
        <div className='info flex f-space-btw'>
          <span className='flex f-start f-column'>
            <h4>Doubt</h4>
            <p>Raj has opened a doubt</p>
          </span>
          <Avatar alt='K' src='/static/images/avatar/1.jpg' />
        </div>{' '}
        <div className='info flex f-space-btw'>
          <span className='flex f-start f-column'>
            <h4>Doubt</h4>
            <p>Mustafa Open a Doubt</p>
          </span>
          <Avatar alt='U' src='/static/images/avatar/1.jpg' />
        </div>{' '}
        <div
          className='info flex f-space-btw'
          onClick={() => router.push('/article/article-pulkit')}
        >
          <span className='flex f-start f-column'>
            <h4>Article</h4>
            <p>Pulkit Gupta Posted a new Article</p>
          </span>
          <Avatar alt='L' src='/static/images/avatar/1.jpg' />
        </div>
      </Glass>
    </Flex>
  );
};

export default RecentActivity;
