import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RecentActivity from '../sidebar/RecentActivity';
import Navbar from '../header/Navbar';
import styles from '../../styles/rank.module.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Loader from '../loader/Loader';
import Flex from '../ui/Flex';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [isLoading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const [mentorData, setMentorData] = useState([]);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const tabsMap = { 0: 'recent', 1: 'doubts', 2: 'answers', 3: 'sessions' };
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  useEffect(() => {
    const subscribe = () => {
      setLoading(true);
      axios
        .post('/api/rank', {
          role: 'student',
        })
        .then((res) => {
          setStudentData(res.data);
          setLoading(false);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      axios
        .post('/api/rank', {
          role: 'mentor',
        })
        .then((res) => {
          setMentorData(res.data);
          console.log(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
      console.log(studentData);
      console.log(mentorData);
    };
    return subscribe;
  }, []);

  return (
    <div className='flex f-space-eve f-start'>
      <section className={styles.section_rank}>
        <Navbar>
          <h3>Feed Section</h3>
        </Navbar>
        {isLoading && (
          <Flex
            style={{
              width: '100%',
            }}
          >
            <Loader />
          </Flex>
        )}
        {!isLoading && (
          <Box sx={{ width: '100%' }}>
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
                <Tab label='Students' />
                <Tab label='Mentors' />
              </Tabs>
              <Button
                style={{
                  width: '100%',
                }}
                className='flex f-space-btw'
                color='success'
              >
                <div>Rank</div>
                <div>Name</div>
                <div>Points</div>
              </Button>
              {selectedTab === 0 && (
                <div>
                  {studentData.length &&
                    studentData.map((data, index) => (
                      <Button
                        style={{
                          width: '100%',
                        }}
                        className='flex f-space-btw'
                        variant='outlined'
                      >
                        <div>{index + 1}</div>
                        <div>{data.name}</div>
                        <div>{data.points}</div>
                      </Button>
                    ))}
                </div>
              )}
              {selectedTab === 1 && (
                <div>
                  {mentorData.length &&
                    mentorData.map((data, index) => (
                      <Button
                        style={{
                          width: '100%',
                        }}
                        className='flex f-space-btw'
                        variant='outlined'
                      >
                        <div>{index + 1}</div>
                        <div>{data.name}</div>
                        <div>{data.points}</div>
                      </Button>
                    ))}
                </div>
              )}
              {selectedTab === 2 && <div>Tab3</div>}
              {selectedTab === 3 && <div>Tab4</div>}
            </Box>
            {/* <TabPanel value={value} index={0}>
           
            </TabPanel>
            <TabPanel value={value} index={1}>
             
            </TabPanel> */}
          </Box>
        )}
      </section>
      <section className='section_activity'>
        <RecentActivity />
      </section>
    </div>
  );
}
