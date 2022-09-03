import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/doubtans.module.css';
import Glass from '../ui/Glass';
import { Avatar, Box, IconButton, Button, TextField } from '@mui/material';
import Navbar from '../header/Navbar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RecentActivity from '../sidebar/RecentActivity';
import { useSession } from 'next-auth/react';

function DoubtAns() {
  const { data: session } = useSession();

  const [showAns, setShowAns] = useState(false);
  const [ans, setAns] = useState('');
  const [answers, setAnswers] = useState([
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using .',
  ]);
  const handleAns = () => {
    console.log(ans);
    setAnswers((answers) => {
      return [...answers, ans];
    });
  };
  return (
    <React.Fragment>
      <Head>
        <title>Doubt Answer - Paathshaala</title>
      </Head>

      <div className='flex f-space-eve f-start'>
        <section className={styles.doubtans_main_section}>
          <Navbar>
            <Avatar sx={{ mr: 1 }} />{' '}
            <div className='f-column' style={{ lineHeight: '60%' }}>
              <h3>User 1</h3>
              <p>asked a question, 16 hours ago</p>
            </div>
          </Navbar>
          <Glass className={styles.question_box}>
            <p className={styles.question_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </Glass>
          {session && (
            <div className='flex f-end'>
              <Button
                onClick={() => setShowAns(!showAns)}
                variant='outlined'
                sx={{ borderRadius: 8, mr: 2 }}
              >
                ADD Answer
              </Button>
            </div>
          )}{' '}
          {showAns && (
            <Glass className={styles.ans_box}>
              <TextField
                id='standard-textarea'
                placeholder='Type your answer..'
                minRows={4}
                multiline
                fullWidth
                variant='standard'
                onChange={(event) => setAns(event.target.value)}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    color: 'var(--font-color)',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '18px',
                  },
                }}
              />
              <div className='flex f-end'>
                <Button
                  disabled={false}
                  sx={{ borderRadius: 8 }}
                  variant='contained'
                  onClick={handleAns}
                >
                  Submit
                </Button>
              </div>
            </Glass>
          )}
          <h3 style={{ margin: 10 }}>Answers</h3>
          {answers.map((data, index) => {
            return (
              <>
                <Glass className={styles.ans_box}>
                  <div className='flex f-start'>
                    <Avatar sx={{ mr: 1, mt: 2 }} />{' '}
                    <div
                      className='f-column f-start'
                      style={{ lineHeight: '70%' }}
                    >
                      <h3>
                        User {4 + index}{' '}
                        <CheckCircleIcon
                          sx={{ color: 'var(--primary-color)' }}
                          fontSize='small'
                        />
                      </h3>
                      <p>answered, 5 hours ago</p>
                    </div>
                  </div>

                  <br />
                  <p className={styles.question_info}>{data}</p>

                  {session && (
                    <div className='flex f-start'>
                      <IconButton size='large' sx={{ my: 1 }}>
                        <ThumbUpOutlinedIcon
                          fontSize='small'
                          sx={{ mr: 1, color: 'var(--primary-color)' }}
                        />{' '}
                        <p
                          style={{
                            fontWeight: 700,
                            color: 'var(--primary-color)',
                          }}
                        >
                          UPVOTE 9
                        </p>
                      </IconButton>
                      <IconButton sx={{ my: 1 }}>
                        <ThumbDownOutlinedIcon />
                      </IconButton>
                    </div>
                  )}
                </Glass>
              </>
            );
          })}
        </section>
        <section className='section_activity'>
          <RecentActivity />
        </section>
      </div>
    </React.Fragment>
  );
}

export default DoubtAns;
