import React from 'react';
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

const RankPage = () => {
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
              &nbsp; &nbsp;<h3>Person Name</h3>
            </Flex>
            <p className={`${styles.card_section} ${styles.caption}`}>
              Hey there! <br /> This is a sample Caption
            </p>
            <div className={`${styles.card_section} ${styles.image_section}`}>
              <Image src='/background.webp' alt='post-image' layout='fill' />
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
              &nbsp; &nbsp;<h3>Person Name</h3>
            </Flex>
            <p className={`${styles.card_section} ${styles.caption}`}>
              Hey there! <br /> This is a sample Caption
            </p>
            <div className={`${styles.card_section} ${styles.image_section}`}>
              <Image src='/background.webp' alt='post-image' layout='fill' />
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
              &nbsp; &nbsp;<h3>Person Name</h3>
            </Flex>
            <p className={`${styles.card_section} ${styles.caption}`}>
              Hey there! <br /> This is a sample Caption
            </p>
            <div className={`${styles.card_section} ${styles.image_section}`}>
              <Image src='/background.webp' alt='post-image' layout='fill' />
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
              &nbsp; &nbsp;<h3>Person Name</h3>
            </Flex>
            <p className={`${styles.card_section} ${styles.caption}`}>
              Hey there! <br /> This is a sample Caption
            </p>
            <div className={`${styles.card_section} ${styles.image_section}`}>
              <Image src='/background.webp' alt='post-image' layout='fill' />
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
              &nbsp; &nbsp;<h3>Person Name</h3>
            </Flex>
            <p className={`${styles.card_section} ${styles.caption}`}>
              Hey there! <br /> This is a sample Caption
            </p>
            <div className={`${styles.card_section} ${styles.image_section}`}>
              <Image src='/background.webp' alt='post-image' layout='fill' />
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

export default RankPage;
