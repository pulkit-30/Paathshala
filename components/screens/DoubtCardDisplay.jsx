import React, { useContext, useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import RowCard from '../utils/RowCard';
import styles from '../../styles/doubt.module.css';
import axios from 'axios';
import MessageContext from '../../context/messages/MessageContext';
import { useRouter } from 'next/router';
import Loader from '../loader/Loader';

const DoubtCardDisplay = ({ email, doubt }) => {
  const [isLoading, setLoading] = useState(false);
  const [userData, updateUser] = useState();
  const Message = useContext(MessageContext);
  const router = useRouter();
  useEffect(() => {
    const subscribe = () => {
      setLoading(true);
      axios
        .post('/api/userbyemail', {
          email,
        })
        .then((res) => {
          console.log(res.data);
          updateUser(res.data);
          setLoading(false);
        })
        .catch((err) => {
          Message.ThrowMessage(err.message);
          setLoading(false);
        });
    };
    return subscribe;
  }, []);
  return (
    <React.Fragment>
      {isLoading && <Loader />}
      {!isLoading && (
        <RowCard
          onClick={() => {
            router.push('/doubt/' + doubt.id);
          }}
        >
          <div
            className={styles.user_info + ' flex f-space-eve f-column f-start'}
          >
            <div className='flex f-space-btw'>
              <div>
                <Avatar alt={userData?.name} src={userData?.image} />
              </div>
              &nbsp; &nbsp; &nbsp;
              <div>
                <h4>{userData?.name}</h4>
                <p>{userData?.role}</p>
              </div>
            </div>
          </div>
          <p className={styles.problem_info}>{doubt.content}</p>
        </RowCard>
      )}
    </React.Fragment>
  );
};

export default DoubtCardDisplay;
