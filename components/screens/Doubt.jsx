import React from 'react';
import RecentActivity from '../sidebar/RecentActivity';
import styles from '../../styles/doubt.module.css';
import Glass from '../ui/Glass';
import { Avatar } from '@mui/material';
import RowCard from '../utils/RowCard';
import Navbar from '../header/Navbar';
import Flex from '../ui/Flex';
import CreatePost from '../ui/CreatePost';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import axios from 'axios';
const Doubt = () => {
  const { data: session } = useSession();
  useEffect(() => {
    axios
      .get('/api/doubts')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  const route = useRouter();
  return (
    <React.Fragment>
      <div className='flex f-space-eve f-start'>
        <section
          className={styles.doubt_main_section + ' flex f-column f-start'}
        >
          <Navbar>
            <h3>Doubt Section</h3>
          </Navbar>
          {session && <CreatePost tags={true} />}
          <RowCard
            onClick={() => {
              route.push('/doubt/1');
            }}
          >
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name 1</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>
          <RowCard>
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>{' '}
          <RowCard>
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>{' '}
          <RowCard>
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>{' '}
          <RowCard>
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>{' '}
          <RowCard>
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>{' '}
          <RowCard>
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>{' '}
          <RowCard>
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>{' '}
          <RowCard>
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>{' '}
          <RowCard>
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>{' '}
          <RowCard>
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>{' '}
          <RowCard>
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>{' '}
          <RowCard>
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>{' '}
          <RowCard>
            <div
              className={
                styles.user_info + ' flex f-space-eve f-column f-start'
              }
            >
              <div className='flex f-space-btw'>
                <div>
                  <Avatar alt='U' src='#' />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div>
                  <h4>Person Name</h4>
                  <p>Student/Mentor</p>
                </div>
              </div>
            </div>
            <p className={styles.problem_info}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              perferendis. Corporis provident quidem, delectus ratione ducimus
              similique quibusdam eos soluta?
            </p>
          </RowCard>
        </section>
        <section className='section_activity'>
          <RecentActivity>
            <Glass
              className={
                styles.recent_doubts_container +
                ' activity_container flex f-column'
              }
            >
              <h3>No Doubt History</h3>
            </Glass>
          </RecentActivity>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Doubt;
