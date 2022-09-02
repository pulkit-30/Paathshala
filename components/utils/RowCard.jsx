import React from "react";
import styles from "../../styles/rowCard.module.css";
import Glass from "../ui/Glass";

const RowCard = (props) => {
  return (
    <Glass
      className={styles.row_card + " flex f-space-eve"}
      onClick={props.onClick}
    >
      {props.children}
    </Glass>
  );
};

export default RowCard;
