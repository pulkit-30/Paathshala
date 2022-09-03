import React from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Flex from '../ui/Flex';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import Glass from '../ui/Glass';

const Home = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <div className='flex f-space-eve f-start'>
        <section className={styles.homePage_section}>
          <Flex className='f-column'>
            <Image src='/banner.png' alt='banner' height={500} width={'1000'} />
            <Button
              onClick={() => router.push('/register')}
              variant='contained'
              style={{
                borderRadius: '30px',
                position: 'absolute',
                top: '370px',
                left: '130px',
                padding: '20px 50px',
              }}
            >
              Let's Start
            </Button>
          </Flex>
          <Flex
            style={{
              marginTop: '50px',
            }}
          >
            <Image src='/graph.png' height={700} width={1000} />
          </Flex>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;
