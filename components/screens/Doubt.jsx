import React, { useContext, useState } from 'react';
import RecentActivity from '../sidebar/RecentActivity';
import styles from '../../styles/doubt.module.css';
import Glass from '../ui/Glass';
import DoubtCardDisplay from './DoubtCardDisplay';
import Navbar from '../header/Navbar';
import CreatePost from '../ui/CreatePost';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import axios from 'axios';
import Flex from '../ui/Flex';
import Loader from '../loader/Loader';
import MessageContext from '../../context/messages/MessageContext';
const Doubt = () => {
  const Message = useContext(MessageContext);
  const [allDoubts, updateDoubts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { data: session } = useSession();
  useEffect(() => {
    const subscribe = () => {
      setLoading(true);
      axios
        .get('/api/doubts')
        .then((res) => {
          console.log(res);
          updateDoubts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          Message.ThrowMessage(err.message);
          setLoading(false);
        });
    };
    return subscribe;
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
          <div className='flex'>{isLoading && <Loader />}</div>
          {!isLoading &&
            allDoubts.map((doubt) => (
              <DoubtCardDisplay email={doubt.authorEmail} doubt={doubt} />
            ))}
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
