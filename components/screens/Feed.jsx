import React, { useEffect } from 'react';
import RecentActivity from '../sidebar/RecentActivity';
import styles from '../../styles/feed.module.css';
import Navbar from '../header/Navbar';
import Card from '../utils/Card';
import { Stack } from '@mui/system';
import { Avatar, IconButton, TextField } from '@mui/material';
import Flex from '../ui/Flex';
import { Send } from '@mui/icons-material';
import Image from 'next/image';
import CreatePost from '../ui/CreatePost';
import { useState } from 'react';
import axios from 'axios';

const Feed = () => {
  const [data, updateData] = useState([]);
  useEffect(() => {
    axios.get('/api/post').then((res) => updateData(res.data));
  }, []);
  return (
    <React.Fragment>
      <div className='flex f-space-eve f-start'>
        <section className={styles.section_user_feed}>
          <Navbar>
            <h3>Feed Section</h3>
          </Navbar>
          <CreatePost />
          <Card>
            <Flex
              className={`f-start ${styles.card_section} ${styles.user_info}`}
            >
              <Avatar />
              &nbsp; &nbsp;<h3>admin</h3>
            </Flex>
            <p className={`${styles.card_section} ${styles.caption}`}>
              Hey there! <br /> This is a sample Caption
            </p>
            <div className={`${styles.card_section} ${styles.image_section}`}>
              <Image src='/feed1.png' alt='post-image' layout='fill' />
            </div>
            <div className={`${styles.card_section} ${styles.util_section}`}>
              <Stack>
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> One Comment</p>
                </Flex>
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> Two Comment</p>
                </Flex>{' '}
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> Three Comment</p>
                </Flex>
              </Stack>
              <form className='flex f-space-eve'>
                <TextField
                  type={'text'}
                  className={styles.comment_input}
                  placeholder='comment...'
                />
                <IconButton color='primary'>
                  <Send />
                </IconButton>
              </form>
            </div>
          </Card>
          <Card>
            <Flex
              className={`f-start ${styles.card_section} ${styles.user_info}`}
            >
              <Avatar />
              &nbsp; &nbsp;<h3>Pulkit</h3>
            </Flex>
            <p className={`${styles.card_section} ${styles.caption}`}>
              Hey there! <br /> This is a sample Caption
            </p>
            <div className={`${styles.card_section} ${styles.image_section}`}>
              <Image src='/feed2.jpg' alt='post-image' layout='fill' />
            </div>
            <div className={`${styles.card_section} ${styles.util_section}`}>
              <Stack>
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> One Comment</p>
                </Flex>
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> Two Comment</p>
                </Flex>{' '}
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> Three Comment</p>
                </Flex>
              </Stack>
              <form className='flex f-space-eve'>
                <TextField
                  type={'text'}
                  className={styles.comment_input}
                  placeholder='comment...'
                />
                <IconButton color='primary'>
                  <Send />
                </IconButton>
              </form>
            </div>
          </Card>
          <Card>
            <Flex
              className={`f-start ${styles.card_section} ${styles.user_info}`}
            >
              <Avatar />
              &nbsp; &nbsp;<h3>Tushar</h3>
            </Flex>
            <p className={`${styles.card_section} ${styles.caption}`}>
              Hey there! <br /> This is a sample Caption
            </p>
            <div className={`${styles.card_section} ${styles.image_section}`}>
              <Image src='/feed3.jpg' alt='post-image' layout='fill' />
            </div>
            <div className={`${styles.card_section} ${styles.util_section}`}>
              <Stack>
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> One Comment</p>
                </Flex>
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> Two Comment</p>
                </Flex>{' '}
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> Three Comment</p>
                </Flex>
              </Stack>
              <form className='flex f-space-eve'>
                <TextField
                  type={'text'}
                  className={styles.comment_input}
                  placeholder='comment...'
                />
                <IconButton color='primary'>
                  <Send />
                </IconButton>
              </form>
            </div>
          </Card>
          <Card>
            <Flex
              className={`f-start ${styles.card_section} ${styles.user_info}`}
            >
              <Avatar />
              &nbsp; &nbsp;<h3>Mustafa</h3>
            </Flex>
            <p className={`${styles.card_section} ${styles.caption}`}>
              Hey there! <br /> This is a sample Caption
            </p>
            <div className={`${styles.card_section} ${styles.image_section}`}>
              <Image src='/feed4.jpg' alt='post-image' layout='fill' />
            </div>
            <div className={`${styles.card_section} ${styles.util_section}`}>
              <Stack>
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> One Comment</p>
                </Flex>
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> Two Comment</p>
                </Flex>{' '}
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> Three Comment</p>
                </Flex>
              </Stack>
              <form className='flex f-space-eve'>
                <TextField
                  type={'text'}
                  className={styles.comment_input}
                  placeholder='comment...'
                />
                <IconButton color='primary'>
                  <Send />
                </IconButton>
              </form>
            </div>
          </Card>
          <Card>
            <Flex
              className={`f-start ${styles.card_section} ${styles.user_info}`}
            >
              <Avatar />
              &nbsp; &nbsp;<h3>Mustafa</h3>
            </Flex>
            <p className={`${styles.card_section} ${styles.caption}`}>
              Hey there! <br /> This is a sample Caption
            </p>
            <div className={`${styles.card_section} ${styles.image_section}`}>
              <Image src='/feed5.webp' alt='post-image' layout='fill' />
            </div>
            <div className={`${styles.card_section} ${styles.util_section}`}>
              <Stack>
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> One Comment</p>
                </Flex>
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> Two Comment</p>
                </Flex>{' '}
                <Flex className={styles.post_comment + ' f-start'}>
                  <Avatar
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <p> Three Comment</p>
                </Flex>
              </Stack>
              <form className='flex f-space-eve'>
                <TextField
                  type={'text'}
                  className={styles.comment_input}
                  placeholder='comment...'
                />
                <IconButton color='primary'>
                  <Send />
                </IconButton>
              </form>
            </div>
          </Card>
        </section>
        <section className='section_activity'>
          <RecentActivity />
        </section>
      </div>
    </React.Fragment>
  );
};

export default Feed;
