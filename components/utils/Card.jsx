import React from 'react';
import Glass from '../ui/Glass';
import styles from '../../styles/card.module.css';

const Card = (props) => {
  return (
    <Glass className={styles.card + ' flex f-column f-start s-space-eve'}>
      {props.children}
    </Glass>
  );
};

export default Card;
