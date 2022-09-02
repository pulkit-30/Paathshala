import React from "react";
import RecentActivity from "../sidebar/RecentActivity";
import styles from "../../styles/notification.module.css";
import Navbar from "../header/Navbar";
import { Avatar, Button } from "@mui/material";
import Flex from "../ui/Flex";

const Notification = () => {
  return (
    <div className="flex f-space-eve f-start">
      <section className={styles.notification_main_section}>
        <Navbar>
          <h3>Notification Section</h3>
        </Navbar>
        <Button
          color="success"
          className={styles.Notification_box + " flex f-column f-start"}
        >
          <Flex className={styles.user_info + " f-start"}>
            <div>
              <Avatar
                alt="U"
                src="#"
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
              />
            </div>
            <h3>Person Name</h3>
          </Flex>
          <p className={styles.notification_statement}>
            This is a sample notification
          </p>
        </Button>
        <Button
          color="success"
          className={styles.Notification_box + " flex f-column f-start"}
        >
          <Flex className={styles.user_info + " f-start"}>
            <div>
              <Avatar
                alt="U"
                src="#"
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
              />
            </div>
            <h3>Person Name</h3>
          </Flex>
          <p className={styles.notification_statement}>
            This is a sample notification
          </p>
        </Button>
        <Button
          color="success"
          className={styles.Notification_box + " flex f-column f-start"}
        >
          <Flex className={styles.user_info + " f-start"}>
            <div>
              <Avatar
                alt="U"
                src="#"
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
              />
            </div>
            <h3>Person Name</h3>
          </Flex>
          <p className={styles.notification_statement}>
            This is a sample notification
          </p>
        </Button>
        <Button
          color="success"
          className={styles.Notification_box + " flex f-column f-start"}
        >
          <Flex className={styles.user_info + " f-start"}>
            <div>
              <Avatar
                alt="U"
                src="#"
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
              />
            </div>
            <h3>Person Name</h3>
          </Flex>
          <p className={styles.notification_statement}>
            This is a sample notification
          </p>
        </Button>
        <Button
          color="primary"
          className={styles.Notification_box + " flex f-column f-start"}
        >
          <Flex className={styles.user_info + " f-start"}>
            <div>
              <Avatar
                alt="U"
                src="#"
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
              />
            </div>
            <h3>Person Name</h3>
          </Flex>
          <p className={styles.notification_statement}>
            This is a sample notification
          </p>
        </Button>
        <Button
          color="primary"
          className={styles.Notification_box + " flex f-column f-start"}
        >
          <Flex className={styles.user_info + " f-start"}>
            <div>
              <Avatar
                alt="U"
                src="#"
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
              />
            </div>
            <h3>Person Name</h3>
          </Flex>
          <p className={styles.notification_statement}>
            This is a sample notification
          </p>
        </Button>
        <Button
          color="primary"
          className={styles.Notification_box + " flex f-column f-start"}
        >
          <Flex className={styles.user_info + " f-start"}>
            <div>
              <Avatar
                alt="U"
                src="#"
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
              />
            </div>
            <h3>Person Name</h3>
          </Flex>
          <p className={styles.notification_statement}>
            This is a sample notification
          </p>
        </Button>
        <Button
          color="primary"
          className={styles.Notification_box + " flex f-column f-start"}
        >
          <Flex className={styles.user_info + " f-start"}>
            <div>
              <Avatar
                alt="U"
                src="#"
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
              />
            </div>
            <h3>Person Name</h3>
          </Flex>
          <p className={styles.notification_statement}>
            This is a sample notification
          </p>
        </Button>
      </section>
      <section className="section_activity">
        <RecentActivity></RecentActivity>
      </section>
    </div>
  );
};

export default Notification;
